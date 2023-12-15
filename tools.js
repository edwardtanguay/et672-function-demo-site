import * as config from './config';

export const getTitle = () => {
	if (config.accessGroup === 'member') {
		return 'Flashcard Site';
	} else if (config.accessGroup === 'vipMember') {
		return 'VIP Flashcard Site';
	} else {
		return 'Guest Flashcard Site';
	}
};

export const getSubtitle = (text) => `a ${text} site`; 

/**
 * showFlashcard
 * 
 * showFlashcard(front, back)
 * 
 * showFlashcard('house', 'das Haus')
 * 
 * front = what is displayed on the front of the flashcard
 * 
 * back = what is displayed on the back of the flashcard
 */
export const showFlashcard = (front, back) => {
	return front + ' <span style="color: red">>>></span> ' + back;
}

export const add = (num1, num2) => {
	return num1 + num2;
}

export const getRndInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getSumOfNumbers = (nums) => {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[0]
	}
	return sum;
}

export const doubleAllNumbers = (nums) => {
	const retNums = [];
	for (let i = 0; i < nums.length; i++) {
		retNums.push(nums[i] * 2);
		console.log(retNums);
	}
	return retNums;
}