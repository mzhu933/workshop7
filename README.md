# workshop7
Simulation
# URL: https://mzhu933.github.io/workshop7/

##### - fork Jiayi's work:
##### https://jiayiqu115.github.io/workbook3/
##### This code implements a dynamic particle effect. Each frame randomly generates particles with different positions, sizes, and colors. At the same time, the particles will gradually shrink until they disappear. Through the superposition of transparent backgrounds, the picture retains the trajectory of the previous frame, forming an aesthetic effect similar to the floating fireflies in the night sky.

##### What makes me particularly satisfied is the randomness of the code's colors and the background's superposition. Each run will present a completely different picture. Despite this, there are still many areas where this code can be optimized, such as adding speed and direction to the particles to make them produce more complex motion trajectories or adding interactive functions, such as generating more particles by clicking the mouse and letting the particles move with the mouse. These improvements can further enhance the fun and immersion of the picture.

##### I plan to add dynamic background changes or more complex particle behaviors next and even integrate this effect into interactive visualization tools or mini-games to add more layers and practicality to this project.


## - note in workshop 7 video:
<img width="390" alt="截屏2025-01-23 下午6 03 20" src="https://github.com/user-attachments/assets/469c5b9c-8d9a-44c1-b8ee-b549d19398b8" />

<img width="295" alt="截屏2025-01-23 下午6 03 33" src="https://github.com/user-attachments/assets/0e5f9741-1081-4116-bdac-f5b4e814014f" />

<img width="375" alt="截屏2025-01-23 下午6 03 45" src="https://github.com/user-attachments/assets/9f4a1d20-509f-45a0-b576-3230d18d516c" />



## Planning: 
Her sketch reminded me of the universe and celestial bodies. I want to build on this idea by creating the trajectories of moving stars. I think stars should use random move rather than using a walker which like crawling motion.

## Process: 
1. I realized that stars don’t move forever, they disappear at some point. So, I decided to set them to disappear after five seconds. Lifetime Tracking: Each particle has a recorded birthTime, and its age is calculated using millis(). Once a particle’s age exceeds five seconds (5000ms), it gets removed. (Reference: p5.js MediaElement/time). Particles that "die" (exceed their lifespan) are removed from the particles array using the splice method. (Reference: p5.js splice)

2. Developing: I want the particles to move randomly, and when they collide with each other, they disappear. Particles check for collisions with others using the isTouching method.

3. I thought of an even more interesting idea: start with 300 particles moving randomly. When two particles collide, they disappear. In the end, there might be one particle left, moving alone, or all particles could disappear entirely.

4. added a checkEdges function to ensure the particles stay within the canvas boundaries.

<img width="1433" alt="截屏2025-01-23 下午6 05 32" src="https://github.com/user-attachments/assets/e5780cab-cac1-427c-919e-9783b4445199" />

## Reflection: 
After testing, I noticed that the fewer particles remain, the longer it takes for the next collision to occur. In one test, the last three particles took over half an hour to collide. Watching them chase and compete was surprisingly fun. I can watch it for a long times. I even started betting on which particle would survive until the end. In a way, it adds another layer of interactivity. 
Further development: can add images, images' movement, the motion trajectories of images.




