import React, { useState } from 'react';
import {
  Plus,
  Search,
  Download,
  Activity,
  Target,
  BarChart3,
  FileText,
  Database,
  Edit3,
  Trash2,
  Eye
} from 'lucide-react';
import './App.css';

const ProjectTrackingSystem = () => {
  const [activeTab, setActiveTab] = useState('activities');

  const activities = [
    {
      id: 1,
      name: 'Community Needs Assessment',
      assignedCA: 'Sarah Johnson',
      progress: 75,
      valueChain: 'Data Collection',
      milestone: 'Phase 1 Completion'
    },
    {
      id: 2,
      name: 'Stakeholder Mapping',
      assignedCA: 'Michael Chen',
      progress: 100,
      valueChain: 'Engagement',
      milestone: 'Phase 1 Completion'
    },
    {
      id: 3,
      name: 'Training Material Development',
      assignedCA: 'Emma Rodriguez',
      progress: 45,
      valueChain: 'Capacity Building',
      milestone: 'Phase 2 Launch'
    }
  ];

  const milestones = [
    {
      id: 1,
      name: 'Phase 1 Completion',
      targetDate: '2024-02-15',
      status: 'Completed',
      activities: ['Community Needs Assessment', 'Stakeholder Mapping'],
      deliverables: ['Assessment Report', 'Stakeholder Matrix']
    },
    {
      id: 2,
      name: 'Phase 2 Launch',
      targetDate: '2024-03-20',
      status: 'In Progress',
      activities: ['Training Material Development'],
      deliverables: ['Training Modules']
    }
  ];

  const baselines = [
    {
      id: 1,
      indicator: 'Household Income',
      baseline: '$150/month',
      target: '$300/month',
      dataSource: 'Kobo Survey'
    },
    {
      id: 2,
      indicator: 'School Enrollment Rate',
      baseline: '65%',
      target: '85%',
      dataSource: 'AIN Database'
    }
  ];

  const assessments = [
    {
      id: 1,
      type: 'Impact Assessment',
      date: '2024-03-15',
      status: 'Scheduled',
      outcomes: 'Pending',
      recommendations: 'Pending',
      assessor: 'Internal Team'
    },
    {
      id: 2,
      type: 'Mid-term Evaluation',
      date: '2024-02-20',
      status: 'Completed',
      outcomes: 'Positive engagement, 80% participation',
      recommendations: 'Increase community meetings',
      assessor: 'External Evaluator'
    }
  ];

  const integrations = [
    { name: 'Kobo Toolbox', status: 'Connected', lastSync: '2024-06-19 10:30' },
    { name: 'AIN Platform', status: 'Connected', lastSync: '2024-06-19 09:15' },
    { name: 'Power BI', status: 'Connected', lastSync: '2024-06-19 11:00' },
    { name: 'D365', status: 'Pending', lastSync: 'Never' }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'green';
    if (progress >= 50) return 'blue';
    if (progress >= 25) return 'orange';
    return 'red';
  };

  const ProgressBar = ({ progress }) => (
    <div className="progress-bar-background">
      <div
        className="progress-bar-fill"
        style={{ width: `${progress}%`, backgroundColor: getProgressColor(progress) }}
      ></div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'activities':
        return (
          <div className="cards-grid">
            {activities.map(activity => (
              <div key={activity.id} className="card">
                <h3>{activity.name}</h3>
                <p>CA: {activity.assignedCA}</p>
                <p>Progress: {activity.progress}%</p>
                <ProgressBar progress={activity.progress} />
                <p>Value Chain: {activity.valueChain}</p>
                <p>Milestone: {activity.milestone}</p>
                <div className="card-actions">
                  <button><Eye /></button>
                  <button><Edit3 /></button>
                  <button><Trash2 /></button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'milestones':
        return (
          <div className="cards-list">
            {milestones.map(m => (
              <div key={m.id} className="card">
                <h3>{m.name}</h3>
                <p>Target Date: {m.targetDate}</p>
                <p>Status: {m.status}</p>
                <p>Activities: {m.activities.join(', ')}</p>
                <p>Deliverables: {m.deliverables.join(', ')}</p>
              </div>
            ))}
          </div>
        );

      case 'baselines':
        return (
          <div className="cards-list">
            {baselines.map(b => (
              <div key={b.id} className="card">
                <h3>{b.indicator}</h3>
                <p>Baseline: {b.baseline}</p>
                <p>Target: {b.target}</p>
                <p>Source: {b.dataSource}</p>
              </div>
            ))}
          </div>
        );

      case 'assessments':
        return (
          <div className="cards-list">
            {assessments.map(a => (
              <div key={a.id} className="card">
                <h3>{a.type}</h3>
                <p>{a.date} • {a.assessor}</p>
                <p>Status: {a.status}</p>
                <p>Outcomes: {a.outcomes}</p>
                <p>Recommendations: {a.recommendations}</p>
              </div>
            ))}
          </div>
        );

      case 'integrations':
        return (
          <div className="cards-list">
            {integrations.map((i, idx) => (
              <div key={idx} className="card">
                <h3>{i.name}</h3>
                <p>Last Sync: {i.lastSync}</p>
                <p>Status: {i.status}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Project Tracking System</h1>
          <p>Manage activities, milestones, baselines, assessments & integrations</p>
        </div>
        <div className="header-actions">
          <button><Download /> Export</button>
          <button><Plus /> Add</button>
        </div>
      </header>

      <nav className="tabs">
        {[
          { id: 'activities', label: 'Activities', icon: Activity },
          { id: 'milestones', label: 'Milestones', icon: Target },
          { id: 'baselines', label: 'Baselines', icon: BarChart3 },
          { id: 'assessments', label: 'Assessments', icon: FileText },
          { id: 'integrations', label: 'Integrations', icon: Database }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={activeTab === tab.id ? 'tab-active' : 'tab'}
            >
              <Icon /> {tab.label}
            </button>
          );
        })}
      </nav>

      <main className="content">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default ProjectTrackingSystem;
