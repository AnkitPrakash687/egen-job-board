<template>
  <div>
    <e-toolbar
      :fullTimeChecked="fullTimeChecked"
      @click:fullTimeCheckbox="toggleFullTime"
      @click:search="search"
      @input:title="inputTitle"
      @input:location="inputLocation"
    />

    <v-main class="main">
      <v-row justify="center">
      <v-progress-circular
      v-if="loading"
           :size="70"
      :width="7"
      color="purple"
      indeterminate
      >
      </v-progress-circular>
      </v-row>
      <v-container class="con">
        <v-row justify="center"  v-if="!loading">
          <v-col
            sm="4"
            xs="12"
            class="mb-2"
            v-for="pos in filteredPositions"
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
                @click="clickJob(pos.id)"
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
                <v-row class="ml-4 mb-16">
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
        <v-row justify="center">
          <v-btn
            color="primary"
            large
            @click="loadMore"
            class="my-4"
            :disabled="loadingText=='No More Jobs'?true:false"
           v-if="!loading"
          >
            {{ loadingText }}</v-btn
          >
        </v-row>
        <v-row> </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import { mapData, removeDuplicate } from '@/utils/common.js';
import { fetchJobs, searchJobs } from '@/services/services.js';
export default {
  components: {
    EToolbar: Toolbar,
  },
  data() {
    return {
      positions: [],
      pageCount: 1,
      loading: true,
      loadingText: 'Load More',
      fullTimeChecked: false,
      location: '',
      title: '',
    };
  },
  mounted() {
    this.loading = true;
    fetchJobs(1)
      .then((res) => res.json())
      .then((data) => {
        this.loading = false;
        console.log('apidata', data);
        this.positions = mapData(data)
      })
      .catch(e => {
        console.log(e)
        this.loading = false;
      });
  },
  methods: {
    clickJob(id) {
      console.log(id);
      this.$router.push({ path: `job/${id}` });
    },
    loadMore() {
      let pageNumber = ++this.pageCount;
      this.loading = true;
      if (this.location || this.title) {
        searchJobs(this.location, this.title, this.pageCount)
          .then((res) => res.json())
          .then((data) => {
            this.loading = false;
            if (data.length > 0) {
              data = mapData(data)
              this.positions = removeDuplicate([...this.position, ...data])
            } else {
              this.loadingText = 'No More Jobs';
            }
          })
          .catch((e) => {
            console.log(e);
            this.loading = false;
          });
      }
      fetchJobs(pageNumber)
        .then((res) => res.json())
        .then((data) => {
          console.log(pageNumber, data);
          if (data.length > 0) {
            data = mapData(data)
            this.positions = removeDuplicate([...this.positions, ...data])
          } else {
            this.loadingText = 'No More Jobs';
          }
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
          console.log(e);
        });
    },
    search() {
      this.pageCount = 1;
      this.loadingText = 'Load more';
      this.loading = true;
      searchJobs(this.location, this.title, this.pageCount)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            data = mapData(data)
            this.positions = data;
          }
              this.loading = false;
        });
    
    },
    toggleFullTime() {
      this.fullTimeChecked = !this.fullTimeChecked;
      console.log(this.fullTimeChecked);
    },
    inputTitle(newValue) {
      this.title = newValue;
    },
    inputLocation(newValue) {
      this.location = newValue;
    },
  },
  computed: {
    filteredPositions() {
      if (this.fullTimeChecked) {
        return this.positions.filter((pos) => {
          if (pos.type === 'Full Time') return true;
          return false;
        });
      }
      return this.positions;
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
