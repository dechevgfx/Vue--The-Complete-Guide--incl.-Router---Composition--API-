function randomPower(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logs: [],
        };
    },
    computed: {
        monsterBar() {
            if (this.monsterHealth < 0) {
                return { width: "0%" };
            }
            return { width: this.monsterHealth + "%" };
        },
        playerBar() {
            if (this.playerHealth < 0) {
                return { width: "0%" };
            }
            return { width: this.playerHealth + "%" };
        },
        special() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logs = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = randomPower(1, 5);
            this.monsterHealth -= attackValue;
            this.addLog("Player", "attack", attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = randomPower(2, 8);
            this.playerHealth -= attackValue;
            this.addLog("Monster", "attack", attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = randomPower(8, 15);
            this.monsterHealth -= attackValue;
            this.addLog("Player", "attack", attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = randomPower(4, 12);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLog("Player", "heal", healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
        },
        addLog(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "player";
            }
        },
    },
});
app.mount("#game");
