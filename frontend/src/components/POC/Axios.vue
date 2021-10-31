<template>
  <p
    class="
      mt-2
      text-3xl
      leading-8
      font-extrabold
      tracking-tight
      text-gray-900
      sm:text-4xl
    "
  >
    VueAxios demo
  </p>
  <p>This a list of names which were returned by an api:</p>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<script>
export default {
  name: "Axios",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const { data } = await this.axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = data;
  },
};
</script>
