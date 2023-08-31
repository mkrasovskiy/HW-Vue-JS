<template>
    <div>
        <div class="calc">
            <input class="input" type="text" v-model="result">
            <button @click="addButton(num)" v-for="num in numbers" :key="num.id">{{ num }}</button>
            <button @click="addButton(tub)" v-for="tub in tubs" :key="tub.id">{{ tub }}</button>
            <button @click="calcResult">=</button>
            <button class="reset" @click="reset">reset</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalcComponent',

    data() {
        return {
            result: '',
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            tubs: ['+', '-', '*', '/']
        };
    },

    mounted() {
        
    },

    methods: {
        addButton(char) {
            this.result = this.result.toString();
            this.result += char;
        },
        calcResult() {
            this.result = eval(this.result);    
        },
        reset() {
            this.result = '';
        }
    },
};
</script>

<style lang="css" scoped>
    .calc {
        display: grid;
        grid-template-columns: repeat(3, 150px);
        justify-content: center;
        padding: 48px 0;
    }
    .input {
        grid-column: 1 / -1;
        text-align: right;
    }
    .reset {
        grid-column: 1 / -1;
    }
</style>