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

### Robot Kinematics Calculator
`robot_kinematics.html`

Forward kinematics calculator for serial manipulators using Denavit-Hartenberg parameters — for EECE 5554.

- Enter DH parameters (a, α, d, θ) for any number of joints; toggle between Revolute and Prismatic joint types
- Computes the full T₀ⁿ transformation matrix and end-effector pose (XYZ position + Roll/Pitch/Yaw)
- **3D interactive view** — drag to orbit, scroll to zoom; all joints and frame axes always visible even when links have zero length
- **2D projection** — auto-selects side (XZ) or top (XY) view based on arm geometry
- Presets: **3R Planar**, **Stanford**, **PUMA 560**, **UR12e** (official Universal Robots parameters), **Custom**
- Uses Modified DH (Craig) convention, consistent with Craig's *Introduction to Robotics*

---

### PID Controller Tuner
`pid_tuner.html`

Real-time PID tuning tool for EECE 5580 — Classical Control Systems.

- Enter any plant transfer function as polynomial coefficients; supports first-order, second-order, integrator, unstable, and balancing robot (inverted pendulum) presets
- Tune **Kp**, **Ki**, **Kd** via sliders or direct keyboard input with per-gain reset buttons
- **Step Response** — live plot with rise time, settling time, overshoot, and steady-state error
- **Bode Plot** — open-loop magnitude and phase with phase margin and gain margin readout
- **Nyquist Diagram** — full complex-plane plot with critical point marker
- Stability badge (Stable / Marginal / Unstable) updates in real time; built-in tuning guide

---

### Serial Data Logger Viewer
`serial_logger.html`

Multi-channel CSV viewer for Arduino, ESP32, and any serial data logger.

- Upload a `.csv` file or paste raw data — auto-detects delimiter, header rows, unit rows, and multi-section side-by-side layouts (e.g. Digilent WaveForms exports)
- Plots up to 8 color-coded channels simultaneously with per-channel toggle
- **Mouse interactions** — scroll to zoom centred on cursor, click-drag to pan
- **Crosshair tooltip** — hover over the chart to see exact time and per-channel values
- Threshold line and **peak detection** with configurable minimum distance
- Channel statistics: Min, Max, Mean, RMS per channel
- Demo datasets: IMU, Encoder, ECG-like signal

---

## File Structure

```
tools/
├── index.html                    ← this page (tools gallery)
├── README.md                     ← this file
├── apple_health_viewer.html
├── kalman_filter_visualizer.html
├── robot_kinematics.html
├── pid_tuner.html
└── serial_logger.html
```

## Adding a New Tool

1. Drop the `.html` file into `tools/`
2. Copy the commented template card in `index.html`, fill in `href`, icon, name, description, and badges; bump `animation-delay` by `0.05s`
3. Add a `###` section here in `README.md`
4. Update the file structure block above
5. Commit and push — GitHub Pages deploys in ~60 seconds

---

*See [homepage](https://shawnlinu.github.io/) for contact and research info.*
