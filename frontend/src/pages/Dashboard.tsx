import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  ShieldExclamationIcon,
  GlobeAltIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import { api } from '../services/api';
import { formatDistanceToNow } from 'date-fns';
import { FeedComparisonCard } from '../components/dashboard/FeedComparisonCard';
import { DetailedFeedComparison } from '../components/dashboard/DetailedFeedComparison';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function Dashboard() {
  const { data: summary, isLoading } = useQuery({
    queryKey: ['dashboard-summary'],
    queryFn: () => api.get('/api/v1/indicators/summary/stats'),
    refetchInterval: 300000, // Refresh every 5 minutes
  });

  const stats = [
    {
      name: 'Total Indicators',
      value: summary?.data?.total_indicators || 0,
      icon: ShieldExclamationIcon,
      color: 'bg-blue-500',
    },
    {
      name: 'Active Sources',
      value: summary?.data?.active_sources || 0,
      icon: GlobeAltIcon,
      color: 'bg-green-500',
    },
    {
      name: 'High/Critical Threats',
      value: (summary?.data?.indicators_by_level?.high || 0) + (summary?.data?.indicators_by_level?.critical || 0),
      icon: ExclamationTriangleIcon,
      color: 'bg-red-500',
    },
    {
      name: 'Last Update',
      value: summary?.data?.last_update ? formatDistanceToNow(new Date(summary.data.last_update), { addSuffix: true }) : 'Never',
      icon: ChartBarIcon,
      color: 'bg-purple-500',
    },
  ];

  const threatLevelData = summary?.data?.indicators_by_level
    ? Object.entries(summary.data.indicators_by_level).map(([level, count]) => ({
        name: level.charAt(0).toUpperCase() + level.slice(1),
        value: count,
      }))
    : [];

  const indicatorTypeData = summary?.data?.indicators_by_type
    ? Object.entries(summary.data.indicators_by_type).map(([type, count]) => ({
        name: type.toUpperCase(),
        value: count,
      }))
    : [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Overview of your cyber threat intelligence platform
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((item) => (
          <div
            key={item.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {item.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {item.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feed Comparison Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Feed Comparison Analysis</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeedComparisonCard days={30} />
          <DetailedFeedComparison days={30} />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Threat Level Distribution */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Threat Level Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={threatLevelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {threatLevelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Indicator Type Distribution */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Indicator Type Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={indicatorTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="text-center text-gray-500">
            <p>Recent activity will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
