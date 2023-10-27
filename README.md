# PawGuesser

PawGuesser is a full-stack application that is a fun and engaging way to test your knowledge of Clemson University while exploring the campus in a unique way.
Inspired by the popular game "GeoGuessr," our project is designed to not only entertain but also educate.

## How it works

- Explore Clemson main campus virtually through a series of images.
- Your challenge: guess the location of the college landmark featured in each image.
- Use your knowledge of the campus and surroundings to make your best guess.
- Earn points based on how close your guess is to the actual location.

## Deployment: https://pawguesser.vercel.app/

### Tech Stack

- Language: [Typescript](https://www.typescriptlang.org/)
- Library: [React.js](https://react.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Maps Library: [Leaflet](https://leafletjs.com/)
- CSS Framework: [Tailwind](https://tailwindcss.com/)
- Linter: [esLint](https://eslint.org/)

### Platforms

- Backend Platform: [Supabase](https://supabase.com/)
- Frontend Platform: [Vercel](https://vercel.com/)

### Deployment Instruction

#### Backend Integration

##### Supabase setup

- Create [Supabase](https://supabase.com/) account
- Create a project and make a copy of supabase url and anon access key.
- Inside the project, create a table named `games` in the `public` database.
- Navigate to Authentication tab.

  - Select Policies
  - Add two New Policy within the 'games' table with `Policy from scratch`. Policy configurations:

    - First Policy :

    ```
        policy name: Public insert
        allowed operation: insert
        target roles: DEFAULT
        using expression: true
    ```

    - Second Policy :

    ```
        policy name: Public select
        allowed operation: select
        target roles: DEFAULT
        using expression: true
    ```

##### Vercel Deployment

- Fork this repository. This will create a copy of the repo in your Github account.
- Clone the repo using the command `git clone https://github.com/YOUR_USERNAME/S2308-CPSC-8710-001-90595`
- Navigate to the directory `cd S2308-CPSC-8710-001-90595`
- Create a project in [Vercel](https://vercel.com/)
- You can just use Next.js template while creating project.
- Select the repository your just cloned and setup the project.
- Once the setup is complete, update the environment variables in Vercel:

  - NEXT_PUBLIC_SUPABASE_URL=yoursupabaseurlyoucopiedearlier
  - NEXT_PUBLIC_SUPABASE_ANON_KEY=yoursupabaseanonkeyyoucopiedearlier

- Once updated, re-deploy your next.js application and your app should be live and should be accessible with vercel's assigneed url

## Reflection
Creating PawGuesser was a rewarding journey marked by learning and collaboration. Our team navigated challenges and celebrated successes while building this innovative game.

Challenges:
Defining the game concept was our first hurdle, but once established, technical challenges emerged. Integrating maps and connecting the frontend to the backend demanded careful coding. Estimating task durations and balancing functionality with design posed difficulties.

Successes:
Our structured approach to project management, combined with an agile mindset, proved invaluable. Assigning tasks based on strengths and maintaining open communication were key to our success. Collaboration tools like Git and GitHub facilitated seamless teamwork. Our tech stack, including TypeScript, React.js, Next.js, Leaflet, Tailwind CSS, and Supabase, empowered our development process.

Lessons Learned:
Flexibility and effective communication were crucial lessons. Adapting to changes and embracing challenges enhanced our problem-solving skills. Thorough testing and innovative solutions ensured the reliability of our application. PawGuesser not only showcased our technical proficiency but also our ability to overcome obstacles as a team.

Conclusion:
PawGuesser stands as a testament to our growth in the technology landscape. Through teamwork, adaptability, and a robust tech stack, we transformed challenges into opportunities. This project not only resulted in a fun and educational game but also strengthened our collaborative spirit and technical expertise.
