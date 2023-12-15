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

export const getSubtitle = () => {
	return 'a learn site';
};

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
