export const receiveleads = payload => {
  return {
    type: "RECEIVE_LEADS",
    payload: payload
  };
};
export const fetchleads = payload => {
  return {
    type: "FETCH_LEADS",
    payload: payload
  };
};

export const receiveport = payload => {
  return {
    type: "RECEIVE_PORT",
    payload: payload
  };
};
export const fetchport = payload => {
  return {
    type: "FETCH_PORT",
    payload: payload
  };
};


