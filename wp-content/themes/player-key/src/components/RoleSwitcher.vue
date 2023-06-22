<script>
export default {
  name: 'RoleSwitcher',
  emits: ['changeOption'],
  props: {
    initialRole: {
      type: String,
    },
    userRoles: {
      type: Array,
    }
  },
  watch: {
    checkedRoles() {
      this.$emit('changeOption', {
        option: this.option,
        checkedRoles: this.checkedRoles,
      })
    }
  },
  data() {
    return {
      option: false,
      checkedRoles: [],
      roles: [
        {
          title: 'Coach',
          value: 'coach',
        },
        {
          title: 'Parent',
          value: 'parent',
        },
      ],
    };
  },
  methods: {
    switchOption() {
      this.option = !this.option;

      if (!this.option) {
        this.checkedRoles = [this.initialRole];
      }

      this.$emit('changeOption', {
        option: this.option,
        checkedRoles: this.checkedRoles,
      });
    }
  },
  mounted() {
    this.option = this.userRoles.length > 1
    this.checkedRoles = this.userRoles;
  }
}
</script>

<template>
  <div class="role-switcher">
    <p class="role-switcher__caption">Do you want to use this account as multiple roles for this account?</p>
    <div class="role-switcher__options" :class="{no: !this.option, yes: this.option}" @click="switchOption">
      <span class="role-switcher__option" :class="{active: !this.option}">No</span>
      <span class="role-switcher__option" :class="{active: this.option}">Yes</span>
    </div>
    <ul class="role-switcher__roles" :class="{active: this.option}">
      <li v-for="role in roles" :key="role.title" class="role-switcher__role">
        <label class="role-switcher__input-holder">
          <input type="checkbox"
                 v-model="checkedRoles"
                 :value="role.value"
                 :disabled="initialRole === role.value"
                 class="role-switcher__input">
          <span class="role-switcher__label">{{ role.title }} {{ initialRole === role.value ? '(Initial role)' : '' }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.role-switcher {
  padding-top: 20px;
  margin-bottom: 40px;
}

.role-switcher__options {
  position: relative;
  display: flex;
  width: 120px;
  margin-bottom: 20px;
  padding: 10px 0;
  justify-content: center;
  border-radius: 50px;
  background-color: rgba(217, 217, 217, 0.4);
  cursor: pointer;
}

.role-switcher__options::before {
  content: '';
  position: absolute;
  top: 0;
  display: block;
  width: 50%;
  height: 100%;
  border-radius: 50px;
  background-color: var(--rich-black);
  transition: all 0.4s ease;
}

.role-switcher__options.no::before {
  left: 0;
}

.role-switcher__options.yes::before {
  left: 50%;
  background-color: var(--fresh-lime);
}

.role-switcher__option {
  position: relative;
  flex-shrink: 0;
  display: block;
  width: 50%;
  border-radius: 50px;
  text-align: center;
  font-size: 12px;
  color: #7a7a7a;
  text-transform: uppercase;
  transition: all 0.4s ease;
}

.role-switcher__option.active {
  color: var(--white)
}

.role-switcher__options.yes .role-switcher__option.active {
  color: var(--rich-black);
}

.role-switcher__caption {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 300;
}

.role-switcher__roles {
  list-style-type: none;
  padding: 2px 0 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  box-sizing: border-box;
  transition: height 0.4s ease;
}

.role-switcher__roles.active {
  height: 60px;
}

.role-switcher__role {
  margin-bottom: 12px;
}

.role-switcher__role:last-child {
  margin-bottom: 0;
}

.role-switcher__label {
  position: relative;
  display: inline-block;
  padding-left: 32px;
  font-size: 16px;
  line-height: 1;
  color: #707070;
  transition: color;
  cursor: pointer;
}

.role-switcher__label::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 11px);
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #707070;
  transition: border 0.3s ease;
}

.role-switcher__label::after {
  content: '';
  position: absolute;
  left: 4px;
  top: calc(50% - 7px);
  display: block;
  width: 14px;
  height: 14px;
  background-color: var(--rich-black);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.role-switcher__input {
  display: none;
}

.role-switcher__input:checked + .role-switcher__label {
  color: var(--rich-black)
}

.role-switcher__input:checked + .role-switcher__label::before {
  border: 1px solid var(--rich-black);
}

.role-switcher__input:checked + .role-switcher__label::after {
  opacity: 1;
}

.role-switcher__input:disabled + .role-switcher__label {
  opacity: 0.6;
  pointer-events: none;
}
</style>
