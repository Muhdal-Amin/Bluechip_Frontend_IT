export const CandidateProfile = () => {
    const name = "Peter-Parker";
    const role = "Web Developer";
    const company = "Marvel Studios";
    const experience = 5;
    const isAvailable = true;

    return(
        <>
            <h2>{name}</h2>
            <p>Role: {role}</p>
            <p>Company: {company}</p>
            <p>Experience: {experience} years</p>
            <p>Available for work: {isAvailable ? "Available for hire" : "Not Available for hire"}</p>
            <p>contact: {name.toLowerCase().replace(" ", ".")}@marvel.com</p>
        </>

    );
}