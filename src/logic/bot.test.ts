import { moveWithMode, winningMove, randomMove } from './bots/bot';
import { Mode } from './game';
import { easyMove } from './bots/easy';
import { hardMove } from './bots/hard';
import { mediumMove, pettyMove } from './bots/medium';

describe ('moveWithMode', () => {
    it ('move with mode easy', () => {
        const result = moveWithMode(Mode.EASY);
        expect(result).toBe(easyMove);
    });
    it ('move with mode petty', () => {
        const result = moveWithMode(Mode.PETTY);
        expect(result).toBe(pettyMove);
    });
    it ('move with mode medium', () => {
        const result = moveWithMode(Mode.MEDIUM);
        expect(result).toBe(mediumMove);
    });
    it ('move with mode hard', () => {
        const result = moveWithMode(Mode.HARD);
        expect(result).toBe(hardMove);
    });
    it ('move with mode human', () => {
        const result = moveWithMode(Mode.HUMAN);
        expect(result).toBe(undefined);
    });
    it ('move with mode online', () => {
        const result = moveWithMode(Mode.ONLINE);
        expect(result).toBe(undefined);
    });
});

describe ('winningMove', () => {
    it ('no winning move possible', () => {
        const result = winningMove([0, 0, 0, 0, 0, 0, 0, 0, 0], 2);
        expect(result).toBe(-1);
    });
    it ('winning move possible', () => {
        const result = winningMove([2, 2, 0, 0, 0, 0, 0, 0, 0], 2);
        expect(result).toBe(2);
    });
});

describe ('randomMove', () => {
    it ('random move', () => {
        const result = randomMove(9);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(8);
    });
});
