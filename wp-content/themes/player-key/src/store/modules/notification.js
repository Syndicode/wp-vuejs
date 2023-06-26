import notificationsApi from '../../api/notifications.js'

const state = {
    notifications: [],
    newNotifications: 0,
};

const mutations = {
    getNotificationsSuccess(state, payload) {
        if (payload.length && payload.length !== state.notifications.length) {
            state.notifications = payload;

            let newNotificationsCount = 0;
            payload.forEach((notification) => {
                if (notification.status === 'new') {
                    newNotificationsCount++;
                }
            });
            if (newNotificationsCount !== state.newNotifications) {
                state.newNotifications = newNotificationsCount;
            }
        } else if (payload.length === 0 && state.notifications.length !== 0) {
            state.notifications = [];
            state.newNotifications = 0;
        }
    },
    markAllReadSuccess(state, payload) {
        state.notifications = payload;
        state.newNotifications = 0;
    },
    removeAllSuccess(state) {
        state.notifications = [];
        state.newNotifications = 0;
    }
};

const actions = {
    getNotifications(context, data) {
        return new Promise((resolve) => {
            notificationsApi.getNotifications(data)
                .then((response) => {
                    if (response.data.success) {
                        context.commit('getNotificationsSuccess', response.data.data);
                        resolve(response.data.data);
                    }
                })
                .catch((result) => {

                })
        });
    },
    markAllRead(context, data) {
        return new Promise((resolve) => {
            notificationsApi.markAllRead(data)
                .then((response) => {
                    if (response.data.success) {
                        context.commit('markAllReadSuccess', response.data.data);
                        resolve(response.data.data);
                    }
                })
        });
    },
    removeAll(context, data) {
        return new Promise((resolve) => {
            notificationsApi.removeAll(data)
                .then((response) => {
                    if (response.data.success) {
                        context.commit('removeAllSuccess');
                        resolve(response.data.data);
                    }
                })
        });
    }
};

export default {
    state,
    actions,
    mutations
}
