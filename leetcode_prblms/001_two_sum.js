// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
var twoSum = function(nums, target) {
  let map={}
  for(let i=0;i<nums.length;i++){
     let comp=target-nums[i]
     if(map[comp] != undefined){
        return [map[comp],i]
     }
     map[nums[i]]=i
  }
 
};
let nums=[1,2,3,4,5]
let target=5
console.log(twoSum(nums,target));