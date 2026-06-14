---
title: Result Object Pattern
description: Lorem ipsum dolor sit amet
pubDate:
heroImage: /img/blog/result-pattern.png
---
# Result Object Pattern

## Summary

A **Result Object** is a small object returned by a method or service to clearly communicate whether an operation succeeded or failed.

Instead of returning random values like `true`, `false`, `nil`, a hash, or raising exceptions for normal business failures, the method returns a structured object.

The Result Object usually answers:

- Did the operation succeed?
- Did it fail?
- What value was produced?
- What error happened?

Example:

```ruby
result = CreateUser.call(params)

if result.success?
  redirect_to user_path(result.value)
else
  flash[:alert] = result.error
  render :new
end
```

---

## Is `Result` built into Ruby or Rails?

No.

Ruby and Rails do **not** include a generic `Result` object by default.

When developers use the Result Object pattern, they usually either:

1. Define their own `Result` class.
2. Use a gem that provides similar behavior, such as `dry-monads`.

For learning Rails, it is usually better to create a simple `Result` class manually first.

---

## Problem It Solves

Without a Result Object, service objects may return inconsistent values.

For example:

```ruby
user = CreateUser.call(params)

if user
  # success
else
  # failure, but why?
end
```

The problem is that `nil` or `false` does not explain what went wrong.

Another common approach is returning hashes:

```ruby
response = CreateUser.call(params)

if response[:success]
  user = response[:user]
else
  error = response[:error]
end
```

This works, but it is less explicit. The structure is informal, and different services may use different keys.

A Result Object creates a consistent contract.

Instead of guessing what the method returned, the caller can always ask:

```ruby
result.success?
result.failure?
result.value
result.error
```

---

## Why It Exists

The pattern exists because not every failure should be treated as an exception.

Some failures are expected business outcomes.

Examples:

- Email already taken
- Payment declined
- User not authorized
- Record validation failed
- Planned expense already executed
- Not enough inventory
- External API rejected the request

These are not always bugs. They are normal possibilities in the domain.

Exceptions should usually be reserved for unexpected technical problems, such as:

- Database connection failed
- Missing constant
- Programming bug
- Unexpected nil value
- External service timeout, depending on context

A Result Object gives the application a clear way to handle expected success and failure states.

---

## Simple Ruby Implementation

```ruby
# app/lib/result.rb

class Result
  attr_reader :value, :error

  def self.success(value = nil)
    new(success: true, value: value)
  end

  def self.failure(error)
    new(success: false, error: error)
  end

  def initialize(success:, value: nil, error: nil)
    @success = success
    @value = value
    @error = error
  end

  def success?
    @success
  end

  def failure?
    !success?
  end
end
```

---

## Example in a Rails Service Object

```ruby
class PlannedExpenses::ExecuteService
  def self.call(planned_expense:)
    new(planned_expense: planned_expense).call
  end

  def initialize(planned_expense:)
    @planned_expense = planned_expense
  end

  def call
    return Result.failure("Already executed") if @planned_expense.executed?

    @planned_expense.update!(status: "executed")

    Result.success(@planned_expense)
  rescue ActiveRecord::RecordInvalid => error
    Result.failure(error.record.errors.full_messages.to_sentence)
  end
end
```

---

## Example in a Rails Controller

```ruby
result = PlannedExpenses::ExecuteService.call(
  planned_expense: @planned_expense
)

if result.success?
  redirect_to finance_path, notice: "Expense executed successfully"
else
  redirect_to finance_path, alert: result.error
end
```

The controller does not need to know all the internal details of the service.

It only needs to know:

```ruby
result.success?
result.failure?
result.value
result.error
```

---

## Why This Makes Code Cleaner

The Result Object pattern helps make code:

- More predictable
- Easier to test
- Easier to read
- Easier to refactor
- Less dependent on exceptions for normal business logic
- More consistent across service objects

Instead of every service inventing its own return style, all services can follow the same contract.

---

## Result Object vs Exceptions

Use a Result Object for expected business outcomes.

Example:

```ruby
return Result.failure("User is not authorized")
```

Use exceptions for unexpected problems.

Example:

```ruby
raise "Unexpected missing account"
```

A good mental model:

> Expected failure: return a Result.  
> Unexpected failure: raise an exception.

---

## Result Object vs ActiveRecord Validation

Rails models already have a built-in validation flow:

```ruby
user.save
user.errors.full_messages
```

For simple model saves, a Result Object may not be necessary.

But for service objects that coordinate multiple steps, a Result Object becomes more useful.

Example services:

- `CreateOrder`
- `RegisterWorker`
- `ExecutePlannedExpense`
- `SyncTwilioCalls`
- `ChargeCustomer`
- `ImportCsv`
- `CreateBooking`

These operations can have several success and failure paths, so a Result Object helps organize the response.

---

## When To Use It

Use a Result Object when:

- A service can succeed or fail in expected ways.
- The caller needs to know why the operation failed.
- The operation has business rules.
- The operation coordinates multiple models or external services.
- You want a consistent return contract across services.

Avoid it when:

- The method is very small.
- Rails validations are already enough.
- The extra abstraction does not improve clarity.
    

---

## Tiny Memory Hook

A Result Object is like a formal answer from a service:

```ruby
Success: here is the value.
Failure: here is the reason.
```

The caller should not have to guess what happened.

---

## Personal Rails Rule

For Rails service objects, prefer returning a Result Object when the service represents an important business action.

Example:

```ruby
Result.success(record)
Result.failure("Already executed")
Result.failure("User is not allowed")
Result.failure(record.errors.full_messages.to_sentence)
```

This makes the code feel more senior because the service has a clear and predictable contract
.