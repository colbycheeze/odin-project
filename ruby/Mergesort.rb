class Sort
  def self.merge_sort(numbers)
    length = numbers.length

    if length > 1
      half = length/2
      left_half = merge_sort(numbers[0...half])
      right_half = merge_sort(numbers.slice(half...length))

      result = merge(left_half, right_half)
      return result
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
      array_b[ib...b_length].each { |x| sorted << x }
    else
      array_a[ia...a_length].each { |x| sorted << x }
    end
    sorted
  end
end
