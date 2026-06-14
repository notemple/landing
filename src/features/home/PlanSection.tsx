import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CalendarBlank,
  CheckCircle,
  Table,
  List,
  Image as ImageIcon,
  MagnifyingGlass,
  Sun,
  Clipboard,
  Tag,
  Trash,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  tag?: string;
}

export default function PlanSection() {
  // Calendar Interactivity State
  const [selectedDay, setSelectedDay] = useState<number>(13);
  const daysInWeek = [
    { num: 11, label: 'Thu' },
    { num: 12, label: 'Fri' },
    { num: 13, label: 'Sat', isToday: true },
    { num: 14, label: 'Sun' },
    { num: 15, label: 'Mon' },
    { num: 16, label: 'Tue' },
    { num: 17, label: 'Wed' },
  ];

  // Tasks Interactivity State
  const [activeTab, setActiveTab] = useState<'today' | 'upcoming' | 'all'>('all');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'redesign the document banner', completed: false, tag: 'today' },
    { id: '2', text: 'clean the car', completed: true, tag: 'upcoming' },
    { id: '3', text: 'ride 10km bicycle', completed: false, tag: 'upcoming' },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [showAddTask, setShowAddTask] = useState(false);

  // Journal State
  const [journalText, setJournalText] = useState(
    "This note isn't urgent. It's observational. Its job is to hold fragments of the day—architectural details, lines of dialogues from cafes, questions about database scaling."
  );
  const [journalPrompt, setJournalPrompt] = useState(
    "Give me 10 questions based on the Math Notes o"
  );

  // Daily Items checklist for Card 4 (Calendar card design)
  const [dailyItems, setDailyItems] = useState([
    { id: 'di1', text: 'Graph Colour', completed: false },
    { id: 'di2', text: 'Connected Graph', completed: false },
    { id: 'di3', text: 'Binary Tree', completed: false },
  ]);

  // Reminders State
  const [reminders, setReminders] = useState([
    { time: '12:30', text: 'Zoom with Lena: final trip details' },
    { time: '17:10', text: 'Check this Templ landing page preview' },
  ]);
  const [newReminderTime, setNewReminderTime] = useState('');
  const [newReminderText, setNewReminderText] = useState('');
  const [showAddReminder, setShowAddReminder] = useState(false);

  // Task Handlers
  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText.trim(),
      completed: false,
      tag: activeTab === 'all' ? 'today' : activeTab
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
    setShowAddTask(false);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Reminder Handlers
  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReminderText.trim() || !newReminderTime.trim()) return;
    setReminders([...reminders, { time: newReminderTime, text: newReminderText.trim() }]);
    setNewReminderText('');
    setNewReminderTime('');
    setShowAddReminder(false);
  };

  const deleteReminder = (index: number) => {
    setReminders(reminders.filter((_, i) => i !== index));
  }; return (
    <section id="plan-section" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/60 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left Side: Explanatory Copy */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <span className="text-[11px] uppercase tracking-[0.25em] font-heading font-semibold text-zinc-400">
            PLAN
          </span>
          <h2 className="font-heading font-medium text-3xl sm:text-4xl text-zinc-900 leading-tight">
            A workspace built for focus
          </h2>
          <svg className="w-full h-3 -mt-1" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
            <path d="M2 10 C75 2, 150 2, 298 10" stroke="#dc70ab" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="font-sans text-base text-zinc-500 leading-relaxed">
            Write, plan, organize, and execute from a single workspace. Every note, task, database, and idea stays connected as your knowledge grows.
          </p>
          <div className="pt-2">
            <Link
              to="/features"
              className="inline-block px-5 py-2 font-heading font-medium text-xs tracking-wide rounded border border-zinc-200 hover:bg-zinc-50 transition-colors text-zinc-700"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right Side: Interactive Grid Box */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* CARD 1: Collection (Static, exact match to screenshot with beautiful card wrapper) */}
          <div className="border border-zinc-100/80 bg-[#fafaf7] p-0 rounded shadow-[5px_5px_12px_rgba(160,165,175,0.14),-5px_-5px_12px_rgba(255,255,255,1)] select-none flex flex-col justify-between overflow-hidden h-[285px]">
            <div className="flex flex-col h-full overflow-hidden">
              {/* Card Title */}
              <div className="px-5 pt-5 mb-4 shrink-0">
                <h3 className="font-heading font-semibold text-base text-zinc-500 tracking-wide">Collection</h3>
                <svg className="w-16 h-2 mt-1" viewBox="0 0 60 8" fill="none">
                  <path d="M2 6 C15 2, 30 2, 58 6" stroke="#9aa3f7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Tab Bar - Replicating screenshot layout exactly */}
              <div className="flex items-center gap-2 p-4 pb-0 mb-3 shrink-0">
                <div className="relative">
                  <div className="flex items-center gap-2 px-4 py-2 rounded text-xs font-heading font-black bg-[#ffd2e1] text-zinc-950 shadow-xs border border-[#ffd2e1]">
                    <Table size={14} weight="bold" />
                    <span>Table</span>
                  </div>
                  {/* Pink dash indicator below Table tab */}
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#ffd2e1] rounded" />
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded text-xs font-heading font-bold bg-[#ebebe8] text-zinc-800 border border-[#ebebe8]/60">
                  <List size={14} weight="bold" />
                  <span>List</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded text-xs font-heading font-bold bg-white/40 hover:bg-white/80 text-zinc-650 border border-zinc-200/80 transition-colors">
                  <ImageIcon size={14} />
                  <span>Gallery</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded text-xs font-heading font-bold bg-white/40 hover:bg-white/80 text-zinc-650 border border-zinc-200/80 transition-colors">
                  <CalendarBlank size={14} />
                  <span>Co...</span>
                </div>
              </div>

              {/* Empty placeholder div for keeping structure balanced */}
              <div className="h-2 shrink-0" />

              <div className="p-4 pt-0 space-y-3.5 flex-grow overflow-hidden">
                {/* Search Input Box */}
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-400">
                    <MagnifyingGlass size={14} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search rows..."
                    readOnly
                    className="w-full bg-[#f4f4f3]/50 border border-zinc-250/60 rounded py-2 pl-9 pr-3 text-[13px] font-heading font-medium tracking-wide outline-none text-zinc-700 placeholder-zinc-400 cursor-default"
                  />
                </div>

                {/* Table layout exact replica */}
                <div className="bg-white rounded border border-zinc-250/85 overflow-hidden text-[13px] w-full">

                  {/* Table Header Row */}
                  <div className="grid grid-cols-[55px_1fr_120px] border-b border-zinc-250/85 bg-[#fbfbf9] font-heading text-[10px] text-zinc-500 font-bold tracking-wider text-left">
                    <div className="px-3 py-2 border-r border-zinc-200 text-center select-none text-zinc-400">
                      #
                    </div>
                    <div className="px-4 py-2 flex items-center gap-1 justify-start">
                      <span>NAME</span>
                      <span className="text-[#a855f7] font-bold text-xs">↑</span>
                    </div>
                    <div className="px-4 py-2 border-l border-zinc-200 text-zinc-500">
                      DATE
                    </div>
                  </div>

                  {/* Table Body Rows */}
                  <div className="divide-y divide-zinc-200/80 text-zinc-800">
                    {/* Row 1 */}
                    <div className="grid grid-cols-[55px_1fr_120px] hover:bg-zinc-50/55 transition-colors">
                      <div className="px-3 py-2 border-r border-zinc-200 text-center font-mono text-zinc-400 bg-[#fbfbf9]/60 flex items-center justify-center">
                        af8
                      </div>
                      <div className="px-4 py-2 font-heading font-normal text-zinc-900 flex items-center">
                        DAA
                      </div>
                      <div className="px-4 py-2 border-l border-zinc-200 font-heading font-normal text-zinc-950 flex items-center">
                        2026-06-15
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-[55px_1fr_120px] hover:bg-zinc-50/55 transition-colors">
                      <div className="px-3 py-2 border-r border-zinc-200 text-center font-mono text-zinc-400 bg-[#fbfbf9]/60 flex items-center justify-center">
                        17d
                      </div>
                      <div className="px-4 py-2 font-heading font-normal text-zinc-900 flex items-center">
                        Math Exam
                      </div>
                      <div className="px-4 py-2 border-l border-zinc-200 font-heading font-normal text-zinc-950 flex items-center">
                        2026-06-15
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-[55px_1fr_120px] hover:bg-zinc-50/55 transition-colors">
                      <div className="px-3 py-2 border-r border-zinc-200 text-center font-mono text-zinc-400 bg-[#fbfbf9]/60 flex items-center justify-center">
                        b69
                      </div>
                      <div className="px-4 py-2 font-heading font-normal text-zinc-900 flex items-center">
                        New Item
                      </div>
                      <div className="px-4 py-2 border-l border-zinc-200 text-zinc-400 font-sans italic flex items-center">
                        Empty
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>          {/* CARD 2: Tasks Checklist (Screenshot replication) */}
          <div className="border border-zinc-100/80 bg-[#fafaf7] p-5 rounded shadow-[5px_5px_12px_rgba(160,165,175,0.14),-5px_-5px_12px_rgba(255,255,255,1)] flex flex-col justify-between overflow-hidden h-[285px]">
            <div className="flex flex-col h-full overflow-hidden">
              {/* Card Title */}
              <div className="mb-4 shrink-0">
                <h3 className="font-heading font-semibold text-base text-zinc-500 tracking-wide">Tasks</h3>
                <svg className="w-16 h-2 mt-1" viewBox="0 0 60 8" fill="none">
                  <path d="M2 6 C15 2, 30 2, 58 6" stroke="#dc70ab" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* List area with overflow hidden */}
              <div className="flex-grow overflow-hidden pr-1 pb-1">
                {/* Monospace Year Month Header */}
                <div className="flex items-center gap-2 mb-4 text-[#a855f7] select-none text-[10px] font-bold font-mono uppercase tracking-[0.2em] px-1">
                  <CalendarBlank size={12} weight="bold" />
                  <span>June 2026</span>
                </div>

                {/* Timeline layout exactly like the screenshot */}
                <div className="relative pl-6 border-l-[1.5px] border-zinc-200/60 ml-2 py-0.5 space-y-3">
                  <AnimatePresence initial={false}>
                    {tasks
                      .filter((t) => activeTab === 'all' || t.tag === activeTab)
                      .map((task, index, arr) => {
                        const isLast = index === arr.length - 1;
                        return (
                          <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="relative flex items-center group/card"
                          >
                            {/* Horizontal connector line linking to task card */}
                            <button
                              onClick={() => toggleTask(task.id)}
                              className="absolute left-[-24.2px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
                              aria-hidden="true"
                            >
                              <div className={`w-[24.5px] h-[1.5px] ${isLast ? 'bg-zinc-700' : 'bg-zinc-200'}`} />
                            </button>

                            {/* Outer task container styled with absolute replica shape, rounded borders, fine shadow and hover styles */}
                            <div className="flex-grow bg-white border border-zinc-200/70 rounded p-3.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.015),0_1px_3px_rgba(0,0,0,0.01)] hover:border-zinc-300 transition-all">
                              <div className="flex items-center flex-grow">
                                {/* Large checkbox identical to design layout */}
                                <button
                                  onClick={() => toggleTask(task.id)}
                                  className={`w-[18px] h-[18px] rounded border flex items-center justify-center transition-all mr-3 shrink-0 ${task.completed
                                    ? 'bg-zinc-900 border-zinc-900 text-white shadow-xs'
                                    : 'border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-300'
                                    }`}
                                  aria-label="Toggle completed state"
                                >
                                  {task.completed && <CheckCircle size={12} weight="fill" className="text-white" />}
                                </button>

                                {/* Task Text matching exact styling */}
                                <span
                                  className={`font-sans font-medium text-[12.5px] tracking-tight text-zinc-800 leading-none ${task.completed ? 'line-through text-zinc-400 font-normal' : ''
                                    }`}
                                >
                                  {task.text}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                  </AnimatePresence>

                  {/* Empty fallback state for lists */}
                  {tasks.filter((t) => activeTab === 'all' || t.tag === activeTab).length === 0 && (
                    <div className="text-center py-6 text-zinc-450 italic text-xs font-sans">
                      No tasks found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Daily Gratitude (Matching Image exactly) */}
          <div className="border border-zinc-100/80 bg-[#fafaf7] p-6 pt-7 rounded shadow-[5px_5px_12px_rgba(160,165,175,0.14),-5px_-5px_12px_rgba(255,255,255,1)] flex flex-col justify-start h-[285px] overflow-hidden select-none pointer-events-none">
            <div className="flex flex-col h-full justify-start">
              {/* Card Title */}
              <div className="mb-4 shrink-0">
                <h3 className="font-heading font-semibold text-base text-zinc-500 tracking-wide">Documents</h3>
                <svg className="w-16 h-2 mt-1" viewBox="0 0 60 8" fill="none">
                  <path d="M2 6 C15 2, 30 2, 58 6" stroke="#ea648d" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Sunflower emoji/icon */}
              <div className="text-[32px] leading-none mb-1 select-none">🌻</div>

              {/* Title */}
              <h3 className="font-sans font-extrabold text-[27px] tracking-tight text-neutral-900 leading-none mb-2.5 select-none">
                Daily Gratitude
              </h3>

              {/* Tags row */}
              <div className="flex items-center gap-1.5 mb-7 shrink-0 select-none">
                <Tag size={13} weight="regular" className="text-zinc-400 rotate-90" />

                {/* pink growth pill */}
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#ffe8ed] border border-[#ffccd7]/70 text-[#ff3b68] font-sans font-bold text-[10.5px]">
                  <span>growth</span>
                  <span className="text-[#ff3b68]/70 text-[9.5px]">✕</span>
                </div>

                {/* Add Tag indicator */}
                <div className="px-2.5 py-0.5 rounded border border-dashed border-zinc-200 text-zinc-400 font-sans font-bold text-[10.5px]">
                  + Add Tag
                </div>
              </div>

              {/* Horizontal line space placeholder from image layout */}
              <div className="h-2 shrink-0" />

              {/* Today's Intention block quote */}
              <div className="border-l-[2.5px] border-zinc-600 rounded pl-4 py-1 flex flex-col select-none">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[15px]">💡</span>
                  <span className="font-sans font-bold text-[14.5px] text-zinc-900 tracking-tight">
                    Today's Intention
                  </span>
                </div>
                <div className="whitespace-nowrap text-zinc-650 font-sans font-medium text-[13.5px] tracking-tight">
                  Focus on appreciating progress rather than p
                </div>
              </div>

            </div>
          </div>

          {/* CARD 4: Calendar (Matching Image 1 exactly) */}
          <div className="border border-zinc-100/80 bg-[#fafaf7] p-5 rounded shadow-[5px_5px_12px_rgba(160,165,175,0.14),-5px_-5px_12px_rgba(255,255,255,1)] flex flex-col justify-between h-[285px] overflow-hidden">
            <div className="flex flex-col h-full justify-between">
              {/* Card Title */}
              <div className="mb-4 shrink-0">
                <h3 className="font-heading font-semibold text-base text-zinc-500 tracking-wide">Daily Planner</h3>
                <svg className="w-16 h-2 mt-1" viewBox="0 0 60 8" fill="none">
                  <path d="M2 6 C15 2, 30 2, 58 6" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                {/* Saturday & Today pill */}
                <div className="flex items-center gap-2 mb-1 shrink-0">
                  <span className="text-[#ff3b68] font-sans font-bold text-[13.5px] tracking-tight">
                    Saturday
                  </span>
                  <span className="bg-[#ffe8ed] border border-[#ffccd7]/70 text-[#ff3b68] font-sans font-extrabold text-[10px] px-2 py-0.5 rounded">
                    Today
                  </span>
                </div>

                {/* June 13, 2026 Title and Week tag */}
                <div className="flex items-baseline gap-1.5 mb-2.5 shrink-0">
                  <h3 className="font-sans font-extrabold text-2xl md:text-[27px] tracking-tighter text-zinc-950 leading-none">
                    June 13, 2026
                  </h3>
                  <span className="text-zinc-400 font-sans text-[11.5px] font-bold pb-0.5">
                    Week...
                  </span>
                </div>

                {/* Tags row */}
                <div className="flex items-center gap-1.5 mb-3 shrink-0">
                  <Tag size={13} weight="regular" className="text-zinc-400 rotate-90" />

                  {/* green Notes pill */}
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#ebf8f2] border border-[#bef2d6] text-[#13785a] font-sans font-bold text-[10.5px]">
                    <span>notes</span>
                    <span className="text-[#13785a]/70 hover:text-[#13785a] text-[9.5px] cursor-pointer">✕</span>
                  </div>

                  {/* Add Tag indicator */}
                  <button
                    type="button"
                    className="px-2.5 py-0.5 rounded border border-dashed border-zinc-200 hover:border-zinc-350 text-zinc-450 hover:text-zinc-700 font-sans font-bold text-[10.5px] transition-colors cursor-pointer"
                  >
                    + Add Tag
                  </button>
                </div>

                {/* Checklist Label */}
                <div className="text-zinc-700 font-sans font-bold text-[12.5px] tracking-tight select-none mb-1.5">
                  Today we need to complete
                </div>

                {/* Checklist items in grey container */}
                <div className="bg-[#f3f3f0] rounded p-2 px-3 flex flex-col gap-1.5 overflow-hidden">
                  {dailyItems.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2.5 py-1 px-1 rounded hover:bg-zinc-200/30 cursor-pointer select-none transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => {
                          setDailyItems(dailyItems.map(d => d.id === item.id ? { ...d, completed: !d.completed } : d));
                        }}
                        className="w-[14px] h-[14px] rounded border-zinc-300 text-zinc-900 focus:ring-0 cursor-pointer accent-zinc-900 shrink-0"
                      />
                      <span className={`font-sans font-bold text-[12.5px] text-zinc-800 leading-tight ${item.completed ? 'line-through text-zinc-400' : ''}`}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

