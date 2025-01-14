/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of love triangles
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    const days = {};
    let totalTime = 800;
    if (!knowsProgramming) {
        totalTime = totalTime + 500;
    }
    Object.keys(config).forEach(focus => {
        return days[focus] = totalTime / config[focus];
    })

    return Math.ceil(days[focus]);
  };
  