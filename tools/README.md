# Tools

Browser-based tools for data exploration and research workflows. All tools run entirely client-side — no server, no account, no data upload.

Live at: **[shawnlinu.github.io/tools/](https://shawnlinu.github.io/tools/)**

---

## Available Tools

### Apple Activity and Health Data Viewer
`apple_health_viewer.html`

Visualizes Apple Health exports in the browser.

- **GPX tab** — interactive map, elevation profile, speed chart, and trackpoint table for workout route files
- **ECG tab** — clinical-style waveform display, R-peak detection, RR interval series, HRV (SDNN), and rhythm classification for ECG CSV files

**Input files** (from Apple Health export zip):
- `electrocardiograms/*.csv` for ECG
- `workout-routes/*.gpx` for activity routes

---

### Kalman Filter Visualizer
`kalman_filter_visualizer.html`

Interactive Kalman filter demo for EECE 5554 — Robot Sensing & Navigation.

- **1D mode** — tracks a noisy 1D position signal; shows true state, noisy measurements, Kalman estimate, and ±σ uncertainty envelope
- **2D mode** — tracks a 2D trajectory with a constant-velocity model; shows uncertainty ellipse evolving over time
- Tune **Q** (process noise), **R** (measurement noise), and **P₀** (initial uncertainty) via sliders or direct keyboard input, with per-parameter reset buttons
- Step-by-step forward and backward playback; live readout of Kalman gain K, innovation, error, variance, and RMSE
- Built-in equation reference and tuning guide panel

---

## File Structure

```
tools/
├── index.html                    ← this page
├── README.md                     ← this file
├── apple_health_viewer.html
└── kalman_filter_visualizer.html
```

## Adding a New Tool

1. Drop the `.html` file into `tools/`
2. Copy the commented template card in `index.html` and fill in `href`, icon, name, description, and badges
3. Add a `###` section here in `README.md`
4. Commit and push — GitHub Pages deploys in ~60 seconds

---

*See [homepage](https://shawnlinu.github.io/) for contact and research info.*
