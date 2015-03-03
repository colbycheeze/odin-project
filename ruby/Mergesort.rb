class Sort
  def self.merge_sort(numbers)
    length = numbers.length

    if length > 1
      half = length/2
      left_half = merge_sort(numbers[0...half])
      right_half = merge_sort(numbers.slice(half...length))

      return merge(left_half, right_half)
    end

    numbers
  end

  private
  def self.merge(array_a, array_b)
    sorted = []
    ia = ib = 0
    a_length = array_a.length
    b_length = array_b.length

    while (ia < a_length and ib < b_length)
      if ( array_a[ia] < array_b[ib] )
        sorted << array_a[ia]
        ia += 1
      else
        sorted << array_b[ib]
        ib += 1
      end
    end

    if ia == a_length
      return sorted.concat array_b[ib..-1]
    else
      return sorted.concat array_a[ia..-1]
    end
  end
end

puts Sort.merge_sort([4,3,20,1,16,-5,7]).to_s # => [-5, 1, 3, 4, 7, 16, 20]
