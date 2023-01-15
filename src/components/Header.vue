<template>
  <div class="header">
    <button>
      <router-link to="/home">Note Libre</router-link>
    </button>
  </div>
</template>
<style scoped>
/* TODO: fix margin-left button */
.header {
  width: 100%;
  height: 10vh;
}
button {
  font-family: "CirrusCumulus";
  text-shadow: 1px 1px 2px rgb(0, 221, 255), 0 0 1em rgb(6, 6, 6),
    0 0 0.2em rgb(85, 103, 98);
  color: rgb(237, 240, 243);
  font-size: 1.5em;
  cursor: pointer;
  border: transparent;
  background-color: transparent;
}
a {
  color: inherit;
  text-decoration: inherit;
}

a:hover {
  color: #64ff86;
}
</style>
