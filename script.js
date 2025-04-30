function renderDailyForecast(forecastData) {
  const dailyForecastEl = document.getElementById('dailyForecast');
  dailyForecastEl.innerHTML = ''; // clear before rendering

  forecastData.slice(0, 7).forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.classList.add('day');

    const date = new Date(day.dt * 1000).toLocaleDateString(undefined, {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });

    dayCard.innerHTML = `
      <h4>${date}</h4>
      <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="icon" />
      <p>${day.weather[0].main}</p>
      <p>🌡️ ${Math.round(day.temp.max)}° / ${Math.round(day.temp.min)}°</p>
    `;

    dailyForecastEl.appendChild(dayCard);
  });
}
