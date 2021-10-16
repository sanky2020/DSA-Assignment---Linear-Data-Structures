//Write a program to find all pairs of an integer array whose sum is equal to a given number?

function twoSum(nums, target_num) {
var map = [];
var indexnum = [];
for (var x = 0; x < nums.length; x++)
{
if (map[nums[x]] != null)
{
var index = map[nums[x]];
indexnum[0] = index;
indexnum[1] = x;
break;
}
else
{
map[target_num - nums[x]] = x;
}
}
return indexnum;
}
console.log(twoSum([10,20,10,40,50,60,70],50));
