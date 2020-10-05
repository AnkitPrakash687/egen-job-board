<template>
  <div>
    <e-toolbar />

    <v-main class="main">
      <v-container class="con">
        <v-row justify="center">
          <v-col
            sm="4"
            xs="12"
            class="mb-2"
            v-for="pos in positions"
            :key="pos.id"
          >
            <v-row justify="center">
              <v-card
                width="40"
                height="40"
                class="rounded-lg elevation-0 logo"
              >
                <v-img
                  width="40"
                  height="40"
                  class="rounded-2"
                  :src="pos.company_logo"
                />
              </v-card>
              <v-sheet
                width="280"
                height="200"
                class="mt-4 rounded-lg"
                @click="clickJob(pos)"
              >
                <v-row class="ml-4 mb-1 pt-8">
                  <span class="text-caption grey--text mr-1">
                    {{ pos.ago }}
                  </span>
                  <span class="text-caption grey--text"> &#x2022; </span>
                  <span class="text-caption grey--text ml-1">{{
                    pos.type
                  }}</span>
                </v-row>
                <v-row class="ml-4 mb-1">
                  <span class="text-subtitle-2 font-weight-bold"
                    >{{ pos.title }}
                  </span>
                </v-row>
                <v-row class="ml-4 mb-8">
                  <span class="text-caption grey--text">
                    {{ pos.company }}
                  </span>
                </v-row>
                <v-row class="ml-4">
                  <span class="text-caption font-weight-bold primary--text">
                    {{ pos.location }}
                  </span>
                </v-row>
              </v-sheet>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import jobapidata from "@/data/jobapidata.js";
export default {
  components: {
    EToolbar: Toolbar,
  },
  data() {
    return {
      positions: [],
    };
  },
  mounted() {
    fetch(
      " https://github-jobs-proxy.appspot.com/positions?description=javascript&location=san+francisco"
    )
      .then((res) => res.json())
      .then((data) => {
        this.positions = jobapidata.map((job) => {
          let timeDiff = Date.now() - new Date(job.created_at).getTime(),
            secAgo = timeDiff / 1000,
            minAgo = secAgo / 60,
            hrAgo = minAgo / 60,
            dayAgo = hrAgo / 24,
            weekAgo = dayAgo / 7,
            yrAgo = weekAgo / 52;

          let ago = "";
          if (yrAgo >= 1) {
            ago = `${Math.floor(yrAgo)}y`;
          } else if (weekAgo >= 1) {
            ago = `${Math.floor(weekAgo)}w`;
          } else if (dayAgo >= 1) {
            ago = `${Math.floor(dayAgo)}d`;
          } else if (hrAgo >= 1) {
            ago = `${Math.floor(hrAgo)}hr`;
          } else if (minAgo >= 1) {
            ago = `${Math.floor(minAgo)}min`;
          } else if (secAgo >= 1) {
            ago = `${Math.floor(secAgo)}w`;
          }
          ago = ago + " ago";
          return { ...job, ago: ago };
        });
        console.log(data);
      });
  },
  methods: {
    clickJob(pos) {
      console.log(pos);
      this.$router.push({ name: "job", params: { pos: pos } });
    },
  },
};
</script>

<style>
.logo {
  position: absolute;
  margin-left: -150px;
}
.con {
  max-width: 1000px !important;
}
</style>