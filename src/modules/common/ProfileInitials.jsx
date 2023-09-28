const ProfileInitials = ({ fullName, size }) => {
    const [firstName, ...lastName] = fullName.split(' ');
    const firstNameLetter = firstName.charAt(0);
    const lastNameLetter =
        lastName.length > 1
            ? lastName[lastName.length - 1].charAt(0)
            : lastName[0].charAt(0);

    return (
        <div
            style={{ height: size, width: size }}
            className={`rounded-full bg-indigo-200 flex items-center justify-center text-3xl font-bold text-indigo-400`}
        >
            {firstNameLetter}
            {lastNameLetter}
        </div>
    );
};

export default ProfileInitials;
