# [LeetTrackr](https://leet-trackr.vercel.app/)

LeetTrackr is a user-friendly web application that displays personalized statistics for LeetCode users. The platform fetches data from a LeetCode API to provide insights into problem-solving progress, global ranking, acceptance rate, and a submission calendar heatmap. This project aims to enhance the coding experience by providing a visual representation of a user's LeetCode performance. <br>
Project is LIVE : (https://leet-trackr.vercel.app/)

## Features

- **LeetCode Username Search**: Input a valid LeetCode username to fetch user data.
- **Problem-Solving Progress**: Track your progress across three difficulty levels: Easy, Medium, and Hard.
- **Global Ranking**: Display your LeetCode global ranking to see how you stack up against others.
- **Acceptance Rate**: View the acceptance rate of your LeetCode submissions.
- **Submission Calendar Heatmap**: A dynamic heatmap visualizing daily submissions based on frequency.
  
## Technologies Used

- **HTML5**: For structuring the web interface.
- **CSS3**: For styling the components and making the interface responsive.
- **JavaScript (ES6+)**: For dynamic content rendering and interaction logic.
- **External Libraries**: 
    - [Font Awesome](https://fontawesome.com/): For icons.
    - [Chart.js](https://www.chartjs.org/): Used for data visualization (can be added for further enhancements).

## How It Works

1. **Username Validation**: Users must enter a valid LeetCode username. The app checks for valid input using regular expressions.
2. **API Fetching**: Once the username is validated, the app fetches user data via a LeetCode API.
3. **Progress Display**: Data related to solved problems (Easy, Medium, Hard) is displayed using circular progress bars.
4. **Global Ranking**: Shows the user's rank on LeetCode (if available from the API).
5. **Acceptance Rate**: The user’s submission acceptance rate is displayed as a percentage.
6. **Submission Calendar**: Generates a heatmap based on the user's daily submissions.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/LeetTrackr.git
    ```

2. Open the `index.html` file in your browser.

3. Ensure you have an internet connection as the project fetches data from an external API.

## API Used

- **LeetCode Stats API**: Used to fetch user statistics [JeremyTsaii](https://github.com/JeremyTsaii) because there is no official Leetcode API available. The data includes total solved problems, acceptance rate, global ranking, submission calendar and many others. So, special thanks to Jeremy for creating such a wonderful API.
- API link: (https://github.com/JeremyTsaii/leetcode-stats-api)

## Future Enhancements

- **Graphical Data Representation**: Add graphical visualizations for user statistics using libraries like Chart.js or D3.js.
- **Customizable Themes**: Allow users to switch between light and dark modes for better user experience.
- **Detailed Analysis**: Provide more in-depth analysis of problem-solving trends and compare it with other users.

## Contributing

If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Any contributions such as bug fixes, feature enhancements, or code improvements are welcome.
You can also use it for your college assignments 😄

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Preview



https://github.com/user-attachments/assets/cfe6522a-8eaa-4fd1-b18b-1224717542c0

