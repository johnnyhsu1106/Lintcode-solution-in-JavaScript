const findPosition = (nums, target) => {
    if (nums === null || nums.length == 0) {
        return -1;
    }
    let start = 0, end = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] === target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (nums[start] === target) {
        return start;
    }
    if (nums[end] === target) {
        return end;
    }
    return -1;
};
