export const getAgoDuration = (date) =>{
    let timeDiff = Date.now() - new Date(date).getTime(),
            secAgo = timeDiff / 1000,
            minAgo = secAgo / 60,
            hrAgo = minAgo / 60,
            dayAgo = hrAgo / 24,
            weekAgo = dayAgo / 7,
            yrAgo = weekAgo / 52;

          let ago = "";
          if (yrAgo >= 1) {
            ago = `${Math.floor(yrAgo)}y`;
          } else if (weekAgo >= 1) {
            ago = `${Math.floor(weekAgo)}w`;
          } else if (dayAgo >= 1) {
            ago = `${Math.floor(dayAgo)}d`;
          } else if (hrAgo >= 1) {
            ago = `${Math.floor(hrAgo)}hr`;
          } else if (minAgo >= 1) {
            ago = `${Math.floor(minAgo)}min`;
          } else if (secAgo >= 1) {
            ago = `${Math.floor(secAgo)}w`;
          }
          return ago
}

