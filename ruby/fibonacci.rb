class Fibonacci
  def self.fib(num)
    fib_array = [0, 1]

    ( num - 1 ).times do |x|
      fib_array << fib_array[-1] + fib_array[-2]
    end
    
    fib_array
  end

  def self.fib_r(num)
    return [ 0, 1 ] if num < 2
    last = fib_r( num - 1 )
    last << ( last[-1] + last[-2] )
  end
end
