"use client";
import React, { useEffect, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LeetCodeStats = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchStats = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query getUserProfile($username: String!) {
              matchedUser(username: $username) {
                submitStats {
                  acSubmissionNum {
                    difficulty
                    count
                  }
                }
              }
              allQuestionsCount {
                difficulty
                count
              }
            }
          `,
          variables: {
            username: 'bhardwajshubh',
          },
        }),
      });

      const json = await response.json();

      const submissions = json.data?.matchedUser?.submitStats?.acSubmissionNum || [];
      const totals = json.data?.allQuestionsCount || [];

      const easySolved = submissions.find((d : any)=> d.difficulty === 'Easy')?.count || 0;
      const mediumSolved = submissions.find((d : any)=> d.difficulty === 'Medium')?.count || 0;
      const hardSolved = submissions.find((d: any) => d.difficulty === 'Hard')?.count || 0;
      const totalSolved = submissions.find((d : any)=> d.difficulty === 'All')?.count || 0;

      const totalEasy = totals.find((d : any)=> d.difficulty === 'Easy')?.count || 0;
      const totalMedium = totals.find((d : any)=> d.difficulty === 'Medium')?.count || 0;
      const totalHard = totals.find((d : any)=> d.difficulty === 'Hard')?.count || 0;
      const totalQuestions = totals.find((d : any)=> d.difficulty === 'All')?.count || 0;

      setData({
        easySolved,
        mediumSolved,
        hardSolved,
        totalSolved,
        totalEasy,
        totalMedium,
        totalHard,
        totalQuestions,
      });
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  fetchStats();
}, []);


  if (loading) {
    return (
      <section className="py-16 lg:py-24" id="leetcodeStats">
        <div className="container">
          <SectionHeader
            eyebrow="Coding Strength"
            title="LeetCode Coding Stats"
            description="A snapshot of my problem-solving journey and competitive programming skills."
          />
          <div className="flex justify-center mt-10 md:mt-20">
            <Card className="w-full max-w-3xl mx-auto px-8 py-10 md:px-16 md:py-14 flex items-center justify-center text-lg text-white/60">
              Loading LeetCode stats...
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data || data.status !== "success") {
    return (
      <section className="py-16 lg:py-24" id="leetcodeStats">
        <div className="container">
          <SectionHeader
            eyebrow="Coding Strength"
            title="LeetCode Coding Stats"
            description="A snapshot of my problem-solving journey and competitive programming skills."
          />
          <div className="flex justify-center mt-10 md:mt-20">
            <Card className="w-full max-w-3xl mx-auto px-8 py-10 md:px-16 md:py-14 flex items-center justify-center text-lg text-red-400">
              Unable to load LeetCode stats.
            </Card>
          </div>
        </div>
      </section>
    );
  }

  // Pie chart data for Easy, Medium, Hard
  const pieData = (
    solved: number,
    total: number,
    label: string,
    color: string
  ) => ({
    labels: [label + " Solved", label + " Remaining"],
    datasets: [
      {
        data: [solved, Math.max(total - solved, 0)],
        backgroundColor: [color, "#23272f"],
        borderWidth: 0,
      },
    ],
  });

  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="py-8 sm:py-12 lg:py-24" id="leetcodeStats">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Coding Strength"
          title="LeetCode Coding Stats"
          description="A snapshot of my problem-solving journey and competitive programming skills."
        />
        <div className="flex justify-center mt-6 sm:mt-10 md:mt-20">
          <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:px-16 lg:py-14 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="w-full md:flex-1 flex flex-col gap-4 sm:gap-6 items-center md:items-start">
              <div className="text-center md:text-left w-full">
                <span className="uppercase text-xs font-bold text-emerald-300 tracking-widest">
                  Username
                </span>
                <div className="text-lg sm:text-xl font-semibold mt-1">
                  bhardwajshubh
                </div>
              </div>
              <div className="text-center md:text-left w-full">
                <span className="uppercase text-xs font-bold text-emerald-300 tracking-widest">
                  Total Problems Solved
                </span>
                <div className="text-lg sm:text-xl font-semibold mt-1">
                  {data?.totalSolved}
                </div>
              </div>

              <div className="text-center md:text-left w-full">
                <span className="uppercase text-xs font-bold text-emerald-300 tracking-widest">
                  Highest Rating
                </span>
                <div className="text-base sm:text-lg mt-1">1627</div>
              </div>
              <div className="text-center md:text-left w-full">
                <span className="uppercase text-xs font-bold text-emerald-300 tracking-widest">
                  Top %
                </span>
                <div className="text-base sm:text-lg mt-1">19.47%</div>
              </div>
              <a
                href={`https://leetcode.com/bhardwajshubh/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-4 sm:px-6 py-2 rounded font-semibold mt-2 sm:mt-4 hover:opacity-90 transition text-sm sm:text-base w-full md:w-auto text-center"
              >
                View My LeetCode Profile
              </a>
            </div>
            <div className="w-full md:flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Easy Pie Chart */}
              <div className="flex flex-col items-center relative group col-span-2 md:col-span-1 sm:max-w-[200px] mx-auto w-full">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 min-w-0 min-h-0 bg-gradient-to-br from-emerald-400/20 to-emerald-900/20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-emerald-300/30">
                  <Pie
                    data={pieData(
                      data.easySolved,
                      data.totalEasy,
                      "Easy",
                      "#34d399"
                    )}
                    options={pieOptions}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-300 drop-shadow-lg animate-pulse">
                      {Math.round((data.easySolved / data.totalEasy) * 100)}%
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 mt-0.5 sm:mt-1 tracking-wide">
                      Solved
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-4 text-emerald-300 font-bold text-base sm:text-lg md:text-xl tracking-wide flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-300 animate-pulse"></span>
                  Easy
                </div>
                <div className="text-white/70 text-sm sm:text-base font-mono">
                  {data.easySolved} <span className="text-white/40">/</span>{" "}
                  {data.totalEasy}
                </div>
              </div>
              {/* Medium Pie Chart */}
              <div className="flex flex-col items-center relative group sm:max-w-[200px] mx-auto w-full">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 min-w-0 min-h-0 bg-gradient-to-br from-yellow-200/20 to-yellow-900/20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-yellow-300/30">
                  <Pie
                    data={pieData(
                      data.mediumSolved,
                      data.totalMedium,
                      "Medium",
                      "#facc15"
                    )}
                    options={pieOptions}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-300 drop-shadow-lg animate-pulse">
                      {Math.round((data.mediumSolved / data.totalMedium) * 100)}
                      %
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 mt-0.5 sm:mt-1 tracking-wide">
                      Solved
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-4 text-yellow-300 font-bold text-base sm:text-lg md:text-xl tracking-wide flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-300 animate-pulse"></span>
                  Medium
                </div>
                <div className="text-white/70 text-sm sm:text-base font-mono">
                  {data.mediumSolved} <span className="text-white/40">/</span>{" "}
                  {data.totalMedium}
                </div>
              </div>
              {/* Hard Pie Chart */}
              <div className="flex flex-col items-center relative group sm:max-w-[200px] mx-auto w-full">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 min-w-0 min-h-0 bg-gradient-to-br from-red-200/20 to-red-900/20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-red-400/30">
                  <Pie
                    data={pieData(
                      data.hardSolved,
                      data.totalHard,
                      "Hard",
                      "#f87171"
                    )}
                    options={pieOptions}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-red-400 drop-shadow-lg animate-pulse">
                      {Math.round((data.hardSolved / data.totalHard) * 100)}%
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 mt-0.5 sm:mt-1 tracking-wide">
                      Solved
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:mt-4 text-red-400 font-bold text-base sm:text-lg md:text-xl tracking-wide flex items-center gap-1.5 sm:gap-2">
                  <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400 animate-pulse"></span>
                  Hard
                </div>
                <div className="text-white/70 text-sm sm:text-base font-mono">
                  {data.hardSolved} <span className="text-white/40">/</span>{" "}
                  {data.totalHard}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;
