export const setScrollEvent = e => ({
   type: 'SET_SCROLL_EVENT',
   payload: e
});

export const setCurrentVisibleComponent = id => ({
   type: 'SET_CURRENT_VISIBLE_COMPONENT',
   payload: id
});

export const setViewHistory = view => ({
   type: 'SET_VIEW_HISTORY',
   payload: view
});

export const popViewHistory = view => ({
   type: 'POP_VIEW_HISTORY',
   payload: view
})
