# 🐍 Snake Game (Terminal Edition)

A classic Snake game playable entirely in the terminal, built using **TypeScript** and **Node.js**. Control the snake using your keyboard (WASD) and try to grow as long as possible without hitting the walls or biting yourself!

---

## 🎮 Features

- Playable directly in the terminal
- Real-time movement using `stdin`
- Snake grows each time it eats food
- Game Over on:
  - Hitting the wall
  - Biting itself
- Displays current score
- Prevents 180-degree turns (e.g. no reversing direction)

---

## 🧰 Requirements

- [Node.js](https://nodejs.org/) installed
- [ts-node](https://www.npmjs.com/package/ts-node) for running TypeScript directly (or transpile to JS)

> **Install ts-node (if not already):**
```
npm install -g ts-node
```

## How to run
```
ts-node snake.ts
```

## Expected outcome

                 
!<img width="395" alt="Screen Shot 2025-05-18 at 15 39 32" src="https://github.com/user-attachments/assets/75b4a881-e9a3-4715-8e36-4cb0aed967ad" />

Press A,S,W,D for moving the snake

