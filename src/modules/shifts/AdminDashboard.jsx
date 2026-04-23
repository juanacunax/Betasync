import React from 'react';

const AdminDashboard = () => {
    const [teamMembers, setTeamMembers] = React.useState([]);
    const [shiftType, setShiftType] = React.useState('Día');

    // Sample data fetching function
    const fetchTeamMembers = () => {
        // Ideally, this should fetch data from an API
        setTeamMembers([
            { name: 'Juan', position: 'Developer', shift: 'Día', restDays: 'Saturday', status: 'Active' },
            { name: 'Maria', position: 'Designer', shift: 'Noche', restDays: 'Sunday', status: 'Active' }
        ]);
    };

    React.useEffect(() => {
        fetchTeamMembers();
    }, []);

    return (
        <div>
            <h1>Admin Panel for Team Management</h1>
            <label htmlFor='shift-type'>Filter by Shift Type:</label>
            <select id='shift-type' value={shiftType} onChange={(e) => setShiftType(e.target.value)}>
                <option value='Día'>Día</option>
                <option value='Noche'>Noche</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Shift</th>
                        <th>Rest Days</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {teamMembers
                        .filter(member => member.shift === shiftType)
                        .map((member, index) => (
                            <tr key={index}>
                                <td>{member.name}</td>
                                <td>{member.position}</td>
                                <td>{member.shift}</td>
                                <td>{member.restDays}</td>
                                <td>{member.status}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;