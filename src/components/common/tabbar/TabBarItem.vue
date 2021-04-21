<template>
  <div id="tab-bar-item">
    <div class="item-icon" v-if="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-else><slot name="active-icon"></slot></div>
    <div class="item-text"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TaBarItem",
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {},
  },
  methods: {
    itemClick() {
      //this.$router.path
    },
  },
};
</script>

<style>
#tab-bar-item {
  flex: 1;
}

.item-icon img,
.item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
}

.active {
  color:red;
}
</style>