<template>
  <div class="contact">
    <div class="contact-dbl-cont">
      <h1 class="title">Contact Me</h1>
      <form class="contact-form" @submit.prevent="sendMessageToCurt()">
        <div class="input-wrapper">
          <label>Name:</label>
          <input class="input" type="text" />
        </div>
        <div class="input-wrapper">
          <label>Email:</label>
          <input class="input" type="text" />
        </div>
        <div class="input-wrapper">
          <label>Small description of work:</label>
          <textarea class="textarea" />
        </div>
        <div v-if="!isSending" class="submit-button" @click="sendMessageToCurt()">Send Message</div>
        <div v-if="sent" class="submitted">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="26"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      name: "",
      description: "",
      isSending: false,
      sent: false
    };
  },
  methods: {
    sendMessageToCurt() {
      this.isSending = true;
      this.sent = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  width: 100%;
  flex-direction: column;
  color: $primary;
  font-family: $font-secondary;
}
// TODO resonsive size for
.contact-dbl-cont {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #39393ae7;
  width: 80%;
}
h1 {
  font-size: $font-size-mega;
  margin-bottom: 20px;
  text-align: center;
}
.contact-form {
  display: flex;
  flex-direction: column;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  color: $primary;
  margin-bottom: 20px;
  label {
    font-family: $font-main;
    margin-bottom: 10px;
    font-size: $font-size-large;
  }
  .input {
    background: none;
    border: none;
    border-bottom: 2px solid $primary;
    padding: 5px 0;
    font-size: $font-size-medium;
    color: $font-light;
    font-family: $font-main;
    &:focus {
      outline: none;
    }
  }
  .textarea {
    height: 100px;
    background: none;
    border: none;
    border: 2px solid $primary;
    padding: 5px 0;
    font-size: $font-size-medium;
    color: $font-light;
    font-family: $font-main;
    &:focus {
      outline: none;
    }
  }
}
.submitted {
  align-self: center;
}
.submit-button {
  background-color: $primary;
  width: 200px;
  align-self: center;
  text-align: center;
  padding: 20px 0;
  font-size: $font-size-large;
  border-radius: 5px;
  color: $font-dark;
  &:hover {
    border: 2px solid $secondary;
    background: none;
    padding: 18px 0;
    cursor: pointer;
    color: $font-light;
  }
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: $primary;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: $font-dark;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px $primary;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px $primary;
  }
}
</style>
