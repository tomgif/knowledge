<template>
  <div id="wrapper" class="fade-in">
    <div id="main">
      <header class="major">
        <h2>{{ title }}</h2>
        <search-bar v-model="query" />
      </header>
      <search-results v-model="filtered" />
    </div>

    <div id="copyright">
      <ul>
        <li>&copy; Untitled</li>
        <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ru from "convert-layout/ru";

export default {
  components: {
    SearchBar: () => import("../components/SearchBar.vue"),
    SearchResults: () => import("../components/SearchResults.vue")
  },
  created() {
    document.title = this.title;
    let query = this.$route.query.q
      ? decodeURIComponent(this.$route.query.q)
      : "";
    if (query) {
      query = ru.fromEn(query);
    }
    this.$store.commit("setQuery", query);
  },
  data() {
    return {
      title: "Вопросы испытания эрудиции Perfect World"
    }
  },
  computed: {
    ...mapState({ results: state => state.results }),
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        const converted = value ? ru.fromEn(value) : "";
        this.$store.commit("setQuery", converted);
        this.$router.push({ query: { q: encodeURIComponent(converted) } });
      }
    },
    filtered() {
      if (this.query) {
        const query = this.query.toUpperCase();
        const results = this.results;
        const flatten = this.flatten(results).map(item => item.join(" "));
        const indexes = this.search(query, flatten);
        return results.filter((item, index) => indexes.includes(index));
      }
      return this.results;
    }
  },
  methods: {
    concat(target) {
      return [].concat.apply([], target);
    },
    flatten(data) {
      return data.map(item => {
        if (Array.isArray(item)) {
          return this.flatten(item);
        } else {
          const field = Object.keys(item).map(subKey => {
            if (Array.isArray(item[subKey])) {
              let subArray = this.flatten(item[subKey]);
              return this.concat(subArray);
            } else {
              return typeof item[subKey] !== "boolean"
                ? item[subKey].toString().toUpperCase()
                : null;
            }
          });
          return this.concat(field);
        }
      });
    },
    search(query, array) {
      return array
        .map((item, index) => (item.includes(query) ? index : null))
        .filter(item => item !== null);
    }
  }
};
</script>
