const app = Vue.createApp({
  data() {
    return {
      myName: "Daffa Haidar Nabil Zufar",
      myAge: 21,
      imageLink: "https://wallpapercave.com/wp/wp7134573.jpg",
      inputValue: "Daffa Haidar Nabil Zufar",
    };
  },
  methods: {
    calculateAge() {
      return this.myAge + 5;
    },
    randomNumber() {
      return Math.round(Math.random() * 1);
    },
  },
});

app.mount("#assignment");
