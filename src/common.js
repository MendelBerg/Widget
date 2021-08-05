const baseUrl = 'https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource';

export const fetchAgreementText = async () => {
  const fetchData = await fetch(baseUrl);
  const data = await fetchData.json();
  const { text } = data[0];

  return text;
};

export const onHide = selector => {
  const elem = document.querySelector(selector);
  elem.classList.add('hidden');
};
