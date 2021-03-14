export const setScrollEvent = e => ({
   type: 'SET_SCROLL_EVENT',
   payload: e
});

export const setCurrentVisibleComponent = id => ({
   type: 'SET_CURRENT_VISIBLE_COMPONENT',
   payload: id
});
