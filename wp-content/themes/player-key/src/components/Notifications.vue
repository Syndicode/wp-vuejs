<script>
import Heading from "./Heading.vue";

export default {
  name: 'Notifications',
  components: {Heading},
  data() {
    return {
      notifications: [],
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  computed: {
    newNotifications() {
      return this.$store.state.notification.notifications.filter((notification) => {
        return notification.status === 'new';
      })
    }
  },
  methods: {
    async markAllRead() {
      this.$store.dispatch('markAllRead', {
        token: this.$store.state.authentication.token,
        currentRole: this.$store.state.authentication.currentRole,
      });
    },
    async removeAll() {
      this.$store.dispatch('removeAll', {
        token: this.$store.state.authentication.token,
        currentRole: this.$store.state.authentication.currentRole,
      });
    }
  },
  mounted() {
    this.$store.dispatch('getNotifications', {
      token: this.$store.state.authentication.token,
      currentRole: this.$store.state.authentication.currentRole,
    }).then((response) => {
      this.notifications = this.type === 'new' ? this.newNotifications : this.$store.state.notification.notifications;
    });
  }
}

</script>

<template>
  <div class="notifications">
    <div class="wrapper notifications__wrapper" :class="`notifications__wrapper--${type}`">
      <Heading :level="type === 'new' ? 2 : 1" :align="type === 'new' ? 'left' : 'center'">
        {{ type === 'new' ? 'New notifications:' : 'Notifications' }}
      </Heading>
      <div class="notifications__actions">
        <button v-if="this.$store.state.notification.notifications.length && type === 'all'" class="button button--black notifications__remove-all-button" @click="removeAll">Remove all</button>
        <button v-if="this.$store.state.notification.newNotifications" class="button button--lime notifications__mark-read-button" @click="markAllRead">Mark all read</button>
      </div>
      <ul v-if="this.$store.state.notification.notifications.length" class="notifications__list">
        <li v-for="notification in this.$store.state.notification.notifications" :key="notification.ID"
            class="notifications__item" :class="`notifications__item--${notification.type}`">
          <span v-if="notification.status === 'new'" class="notifications__new-label">New</span>
          <img v-if="notification.type === 'notice'" src="../assets/images/icon-type-notice.svg" alt=""
               class="notifications__icon notifications__icon--notice">
          <img v-if="notification.type === 'info'" src="../assets/images/icon-type-info.svg" alt=""
               class="notifications__icon">
          <div class="notifications__content">
            {{ notification.message }}
          </div>
          <div class="notifications__item-actions">
          </div>
        </li>
      </ul>
      <p v-else class="notifications__note">There are no notifications</p>
    </div>
  </div>
</template>

<style>
.notifications {
  margin-bottom: 40px;
}

.notifications__wrapper {
  position: relative;
  width: 720px;
}

.notifications__mark-read-button {
  padding: 10px;
  font-size: 12px;
  font-weight: 300;
}

.notifications__remove-all-button {
  padding: 10px;
  font-size: 12px;
  font-weight: 300;
}

.notifications__wrapper--new .notifications__mark-read-button {
  position: absolute;
  top: 0;
  right: 0;
}

.notifications__wrapper--all .notifications__actions {
  position: relative;
  top: -48px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
}

.notifications__icon {
  flex-shrink: 0;
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

#icons_Q2 {
  fill: red;
}

.notifications__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.notifications__item {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 12px;
  padding: 12px 20px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #e1e1e1
}

.notifications__new-label {
  position: absolute;
  left: -20px;
  top: 0;
  display: block;
  width: 24px;
  padding: 4px;
  border-radius: 20px;
  font-size: 10px;
  text-align: center;
  color: var(--rich-black);
  background-color: var(--fresh-lime);
}


</style>
