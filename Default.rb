def fib(a)
    return 0 if a == 0
    return 1 if a == 1
    return fib(a-1) + fib(a-2)
end

puts fib(45)
