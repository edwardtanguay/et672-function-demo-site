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
