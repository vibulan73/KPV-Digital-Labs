"use client";
import { use, useEffect, useRef } from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function Project() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up");
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="meetTheLeaders"
      ref={sectionRef}
      className="relative py-4 px-4 sm:px-6 lg:px-8 mb-16"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="text-left mb-8 md:mb-12">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight text-balance">
            <span className="font-medium">About Client</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg text-white/70 max-w-6xl mx-auto leading-relaxed">
            Our client, a leading provider of software and payroll SaaS,
            specialises in delivering comprehensive production accounting
            solutions. With a strong focus on efficiency, reliability, and
            customer satisfaction, they primarily cater to the film,
            broadcasting and media industries. They have provided software
            solutions for famous production houses including the Marvel
            Franchise, Netflix, Warner Brothers and Eureka.
            <br />
            Their commitment to excellence and continuous improvement has earned
            them a reputation as a trusted logistics partner, capable of
            handling complex supply chain challenges with precision and
            expertise. Operating with a customer-centric approach, they
            prioritise understanding and meeting the unique needs of each
            client, delivering tailored solutions that optimises their client's
            financial operations and drive business success.
          </p>
        </div>
        <div className="text-left mb-8 md:mb-12">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight text-balance">
            <span className="font-medium">Problem Statement</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg text-white/70 max-w-6xl mx-auto leading-relaxed">
            Film budgeting is the cost agreed upon by financers and producers to
            secure the amount that goes into the production of a film. Likewise,
            due to the intricacies of film production, budgeting is broken down
            into various segments and layers.
            <br />
            Our client saw this as an opportunity to simplify complex budgeting
            processes by building software that can help reduce time and
            increase accounting efficiency. As such, the client was seeking a
            system that offers swift and straightforward formula calculations
            akin to Excel formulas which could achieve the following:
            <br /> <br />- An exceptional UI/UX with a user-friendly experience.
            <br></br>
            - Calculations that take no more than 5 seconds.
            <br /> <br />- Make sure the calculations formulas function
            accurately.
          </p>
        </div>
        <div className="text-left mb-8 md:mb-12">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight text-balance">
            <span className="font-medium">Our Solution</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg text-white/70 max-w-6xl mx-auto leading-relaxed">
            In addressing the challenges faced by our team, we at Swivel Tech
            adopted a strategic approach that involved careful analysis,
            collaborative decision-making, and iterative system design. Notable
            challenges included the need to optimise formula calculations for a
            stringent 3-second timeframe, managing complex dependencies within
            the budgeting software, and the initial integration hurdles with
            Hyperformula due to compatibility issues and complex Excel formulas.
            <br /> <br /> To overcome these hurdles, our team employed a
            comprehensive strategy:
            <br />
            <br />
            - Analysis and Evaluation: We conducted an in-depth analysis of the
            client's requirements and the challenges at hand. This involved not
            only understanding the technical constraints but also considering
            the broader context of the client's goals and expectations. Part of
            this analysis included evaluating the feasibility of Hyperformula as
            a solution, weighing its benefits against its limitations and
            compatibility issues.
            <br /> <br />
            - Collaborative Decision-Making: Recognising the value of the
            client's input and expertise, we engaged in collaborative
            decision-making throughout the process. Regular scrum meetings
            provided a forum for open dialogue, allowing us to discuss the
            inadequacies of our initial approach and explore alternative
            solutions together. By involving the client in these discussions, we
            ensured that our decisions were aligned with their objectives and
            preferences.
            <br /> <br /> - System Design Iterations: Developing an effective
            solution required an iterative approach to system design. We
            recognised that finding the optimal solution would likely involve
            multiple iterations, each building upon the insights gained from
            previous attempts. Brainstorming sessions, architectural
            discussions, and prototyping were integral parts of this process,
            allowing us to explore different approaches and refine our designs
            based on feedback and testing.
            <br /> <br /> - Web Worker Implementation: As part of our strategy
            to optimise formula calculations, we decided to leverage Web
            workers. This decision was made after careful consideration of the
            performance implications and technical feasibility. By offloading
            the calculation of aggregation data row values to Web workers, we
            were able to improve performance and responsiveness while ensuring
            the accuracy of the calculations.
            <br /> <br /> - Client Collaboration and Feedback: Throughout the
            implementation - Client Collaboration and Feedback: Throughout the
            implementation process, we maintained continuous collaboration with
            the client. Regular demos and feedback sessions provided
            opportunities for the client to review our progress, offer insights,
            and provide feedback on the direction of the project. This
            collaborative approach not only ensured that the final solution met
            the client's needs but also fostered a sense of ownership and
            partnership between our team and the client.
            <br /> <br /> - Agile Development Practices: Agile development
            practices played a crucial role in our strategic approach. Daily
            scrum meetings, sprint planning, and adaptive responses to change
            allowed us to maintain flexibility and responsiveness throughout the
            development process. By embracing agile principles, we were able to
            quickly iterate on our designs, respond to emerging challenges, and
            deliver a solution that met the evolving needs of the client.
          </p>
        </div>
        <div className="text-left mb-8 md:mb-12">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight text-balance">
            <span className="font-medium">Results and Outcomes</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg text-white/70 max-w-6xl mx-auto leading-relaxed">
            Creating a pivot table-based budgeting system has been a tough
            learning curve with many achievements. The team reduced the time
            taken for calculations up to 3 seconds or less even when handling
            large datasets. They were also able to create an interactive user
            interface that can perform actions like sorting, editing and get
            real-time updates without any delay using ReactJS and efficient
            state management. Some of the favourable points of this system
            include:
            <br /> <br />
            - Enhanced Performance: Integrating Web Workers for parallelised
            formula calculations significantly improved application performance.
            Users now benefit from quicker response times, with formula
            calculations consistently completing within the specified timeframe
            of less than 3 seconds.
            <br /> <br />
            - Responsive User Interface: Employing ReactJS and efficient state
            management ensured a responsive and interactive user interface.
            Users can seamlessly interact with the data grid, perform actions
            like sorting and editing, and observe real-time updates without any
            noticeable delays.
            <br /> <br />
            - Excel-Like Formula Handling: Through the use of Handsontable and
            Hyperformula, we implemented Excel-like formulas and spreadsheet
            functionalities. This enables users to work with familiar formula
            expressions, thereby enhancing the usability of the application for
            tasks involving complex calculations.
            <br /> <br />
            - Modular and Reusable Components: Utilising React's component-based
            architecture allowed for the creation of modular and reusable UI
            components. This approach streamlined both development and
            maintenance efforts, resulting in a more modular codebase that's
            easier to extend and scale.
            <br /> <br />- Background Data Processing: Service workers were
            utilised for background processing of aggregation data row values.
            This separation of background tasks has improved overall system
            stability, effectively preventing UI freezes during intensive
            computations and ensuring a smoother user experience.
          </p>
        </div>
         <div className="text-left mb-8 md:mb-12">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight text-balance">
            <span className="font-medium">Technologies</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg text-white/70 max-w-6xl mx-auto leading-relaxed">
            ReactJS | HandsonTable | HyperFormula | Web Workers 
          </p>
        </div>
      </div>
    </section>
  );
}
