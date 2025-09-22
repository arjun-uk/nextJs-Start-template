"use client";

import { useEffect, useState } from "react";
import { getUsers } from "../../../services/genaralService";


const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // track client mount

  useEffect(() => {
    setMounted(true);

    const fetchUsers = async () => {
      try {
        const data = await getUsers({
            game_id: 1,
        });

        
        setUsers(data.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (!mounted) return null; // render nothing on server
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.total_count}>
            {user.dealer_name} - {user.total_count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
