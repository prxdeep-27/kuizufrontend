import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Leaderboard = ({ category }) => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get('http://localhost:3004/api/scores', {
          params: category ? { category } : {},
        });
        setScores(response.data);
      } catch (err) {
        console.error('Failed to fetch scores:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [category]);

  if (loading) return <p>Loading leaderboard...</p>;

  return (
    <div className="leaderboard-container p-4">
      <h3 className="mb-3">{category ? `${category.toUpperCase()} Leaderboard` : 'Top Scores Leaderboard'}</h3>
      {scores.length === 0 ? (
        <p>No scores yet for this category.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Score</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={score._id}>
                <td>{index + 1}</td>
                <td>{score.username}</td>
                <td>{score.score}</td>
                <td>{score.category}</td>
                <td>{new Date(score.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
