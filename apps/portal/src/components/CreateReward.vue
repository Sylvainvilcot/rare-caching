<template>
  <form style="border: black solid 1px; margin-bottom: 12px; padding: 12px" onsubmit="return false">
    <label>
        Name
        <input type="text" v-model="form.name" />
    </label>
    <br/>
    <label>
        Rarity
        <select>
            <option v-for="option of rarityOptions" :value="option" :key="option">{{ option }}</option>
        </select>
        
    </label>
    <br/>
    <label>
        Display
        <input type="checkbox" v-model="form.display" />
    </label>

    <div style="display: flex">
        <label>
            Coordinates
            <input type="number" step="any" v-model="form.coordinates[0]" />
            <input type="number" step="any" v-model="form.coordinates[1]" />
        </label>
    </div>

    <button type="submit" @click="submit()">Send</button>
</form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        name: "",
        rarity: "",
        display: true,
        coordinates: [0, 0],
      },
      rarityOptions: ["Common", "Rare", "Very rare", "Exceptional", "Unique"],
    };
  },
  methods: {
    async submit() {
        if(typeof this.form.coordinates[0] === 'string' || typeof this.form.coordinates[1] === 'string' || this.form.name === '') {
            return;
        }
        return axios.post('http://localhost:3000/rewards', this.form).then(() => {
            this.clear();
            location.reload();
            return;
        });

    },
    clear() {
      this.form = { name: "", rarity: "", display: true, coordinates: [0, 0] };
    },
  },
};
</script>

<style></style>
