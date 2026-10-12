/* Definitions, exam cues, and examples share one source for guide and flashcards. */
window.GUIDE = [
  {
    "topic": "Foundations",
    "title": "The OS as a controlled, extended machine",
    "source": "ZyBooks 1.1–1.2 · Module 1 goals",
    "objective": "Distinguish abstraction from virtualization; trace safe entry to the kernel and classify interrupts.",
    "terms": [
      [
        "Abstraction",
        "A simpler interface that hides the steps needed to perform an operation.",
        {
          "cue": "Hide details; keep the useful operation.",
          "example": "A file read asks for bytes without requiring your program to control the disk hardware."
        }
      ],
      [
        "Virtualization",
        "Making a physical resource appear as separate or different logical resources that programs can use.",
        {
          "cue": "A logical resource need not match the physical hardware.",
          "example": "Several processes each appear to have a CPU, while the OS alternates them on one core. Sharing does not automatically make them faster."
        }
      ],
      [
        "Kernel / privilege",
        "The kernel is the OS core that manages resources and protects them from unsafe access. Kernel mode permits privileged operations that user mode restricts.",
        {
          "cue": "Kernel = trusted manager; privilege = permission to perform protected operations.",
          "example": "A user program requests disk access through an OS service instead of directly changing device-control registers."
        }
      ],
      [
        "System call / supervisor call",
        "A system call is a program’s request for an OS service. In the course model, a supervisor call is the instruction that transfers control to the kernel to handle the request.",
        {
          "cue": "Request a service → enter the kernel through a controlled path.",
          "example": "A library wrapper prepares a file-read request, then invokes the kernel entry mechanism; an ordinary function call alone does not change privilege."
        }
      ],
      [
        "Interrupt / trap",
        "An interrupt reports an external event to the CPU. A trap is caused by the instruction currently executing, such as a deliberate request to enter the kernel.",
        {
          "cue": "Interrupt: external event. Trap: executing instruction.",
          "example": "A timer fires an interrupt; a supervisor-call instruction causes a synchronous kernel entry. Kernel entry does not necessarily switch processes."
        }
      ],
      [
        "Shell",
        "A program that accepts commands and asks the OS to run programs or perform operations.",
        {
          "cue": "The shell is an interface to the OS, not the kernel itself.",
          "example": "A shell can launch a program, redirect its output, or run a sequence of commands from a script."
        }
      ]
    ],
    "math": "Sequential completion = sum of every phase. With overlap, draw separate CPU and I/O timelines; completion = latest finish. CPU utilization = CPU busy time / elapsed time.",
    "method": "Preserve each process’s phase and instruction order. A single CPU cannot execute two CPU phases simultaneously. Independent devices can overlap. An interrupt enters the kernel but need not select a different process."
  },
  {
    "topic": "Foundations",
    "title": "Multiprogramming, units, and environments",
    "source": "ZyBooks 1.1, 1.3 · Module 1 goals",
    "objective": "Compute overlapped execution times, convert units, and match an environment to its OS goals.",
    "terms": [
      [
        "Multiprogramming",
        "Keeping several programs active so the CPU can run another one while one waits for I/O.",
        {
          "cue": "Overlap one program’s waiting with another’s CPU work.",
          "example": "A uses the CPU for 4 ms and then starts disk I/O; B can use the CPU during A’s wait."
        }
      ],
      [
        "Time-sharing",
        "Sharing CPU time by giving runnable tasks short turns, making the system responsive to multiple users or programs.",
        {
          "cue": "Take turns using the CPU.",
          "example": "A timer ends A’s turn so the scheduler can dispatch B, even if A has not finished."
        }
      ],
      [
        "CPU-bound / I/O-bound",
        "CPU-bound work spends most of its time computing. I/O-bound work frequently waits for input, output, or devices.",
        {
          "cue": "Compute most of the time versus wait frequently for I/O.",
          "example": "A long numerical calculation is CPU-bound; repeatedly reading small disk records may be I/O-bound."
        }
      ],
      [
        "Byte / word",
        "A byte is 8 bits. A word is a machine’s natural data unit, whose size depends on the architecture.",
        {
          "cue": "Byte = 8 bits; word size must be specified.",
          "example": "If a problem states a 32-bit word, each word holds 4 bytes; do not assume every machine uses that word size."
        }
      ],
      [
        "Environments",
        "An OS environment is the setting in which a system operates, which determines its main design goals.",
        {
          "cue": "Identify what the system must optimize.",
          "example": "Mainframe: throughput; server: responsiveness and protection; multiprocessor: parallel work; distributed: communication; real-time: deadlines; sensor network: energy and fault tolerance."
        }
      ],
      [
        "Evolution",
        "OS design evolved as hardware made automation, sharing, personal computing, and networking practical.",
        {
          "cue": "Connect each hardware generation to the capability it enabled.",
          "example": "Course timeline: vacuum tubes → no OS; transistors → batch systems; integrated circuits → interactive time-sharing; microprocessors → personal computing; networks → distributed systems."
        }
      ]
    ],
    "math": "1 KiB = 2¹⁰ bytes; MiB = 2²⁰; GiB = 2³⁰. kB, MB, GB are decimal (10³, 10⁶, 10⁹). Moore model: N(t)=N₀·2^(t/2 years).",
    "method": "Write units at every step. Convert bits to bytes before dividing by KiB/MiB. A transistor-count doubling is not an application-speed guarantee. With tiny overhead-free equal quanta, n continuously runnable processes each get about 1/n CPU."
  },
  {
    "topic": "Foundations",
    "title": "Cloud models and open source",
    "source": "Module 1 goals · supplementary definitions for named objectives",
    "objective": "Identify the customer/provider responsibility boundary and distinguish source visibility from licensing rights.",
    "terms": [
      [
        "SaaS",
        "Software as a Service provides a finished application operated by a provider.",
        {
          "cue": "Use the application.",
          "example": "In a provider-hosted email application, the provider maintains the application and the underlying system."
        }
      ],
      [
        "PaaS",
        "Platform as a Service provides a managed environment for running applications you build.",
        {
          "cue": "Deploy your code; the provider manages the platform.",
          "example": "You deploy a web application while the provider manages its runtime and operating system."
        }
      ],
      [
        "IaaS",
        "Infrastructure as a Service provides computing resources such as virtual machines, storage, and networks.",
        {
          "cue": "Rent infrastructure; manage more of the software yourself.",
          "example": "You rent a virtual machine and typically install and maintain its guest OS and applications."
        }
      ],
      [
        "Open source",
        "Software whose license permits use, inspection, modification, and redistribution under its terms.",
        {
          "cue": "License rights matter; visible code or a zero price alone is not enough.",
          "example": "Before distributing a modified program, check the license’s conditions, such as attribution or source-sharing requirements."
        }
      ]
    ],
    "math": "No formula: compare who manages the application, runtime, and OS.",
    "method": "Classify what the customer controls, not the product name. The goals list these topics, but the supplied ZyBooks excerpts do not develop them; questions stay at the foundational distinctions."
  },
  {
    "topic": "Processes & threads",
    "title": "Process state and saved context",
    "source": "ZyBooks 2.1–2.2 · Module 2 goals",
    "objective": "Trace legal state transitions and explain how virtual CPUs preserve independent executions.",
    "terms": [
      [
        "Process / program",
        "A program is stored instructions. A process is an instance of a program in execution, with its own state and resources, even when it is waiting rather than currently using the CPU.",
        {
          "cue": "Program = instructions; process = execution plus resources.",
          "example": "Starting the same application twice can create two processes running the same code with different data and execution positions."
        }
      ],
      [
        "Ready / running / blocked",
        "Ready means able to run but waiting for CPU time; running means currently executing. Blocked means waiting for an event or resource before execution can continue.",
        {
          "cue": "Ready waits for CPU; blocked waits for something else.",
          "example": "After disk I/O completes, a blocked process becomes ready; it runs only when dispatched."
        }
      ],
      [
        "Context switch",
        "Saving one task’s CPU state and restoring another’s so execution can move between tasks and later resume correctly.",
        {
          "cue": "Scheduler chooses; context switch changes the execution state.",
          "example": "Save A’s program counter and registers, restore B’s saved values, then resume B at its saved instruction."
        }
      ],
      [
        "New / suspended / terminated",
        "New means not yet admitted to execution; suspended means deliberately kept from running. Terminated means execution has finished, though some records may remain for cleanup.",
        {
          "cue": "Distinguish admission, explicit suspension, and completion.",
          "example": "A suspended process needs a resume action; finishing its I/O alone does not necessarily make it runnable."
        }
      ],
      [
        "Virtual CPU benefits",
        "A virtual CPU lets a process behave as if it has its own processor while the OS shares physical CPU time.",
        {
          "cue": "A private-CPU illusion, not guaranteed speed or instruction-set emulation.",
          "example": "The OS saves and restores a process’s state between turns. Emulating a different instruction set requires additional mechanisms beyond ordinary time-sharing."
        }
      ]
    ],
    "math": "Basic transitions: ready → running (dispatch); running → ready (preempt); running → blocked (wait); blocked → ready (event). There is no direct blocked → running transition in this model.",
    "method": "Track readiness separately from priority. An event makes a process eligible; it does not automatically give it the CPU. A running process’s live registers can differ from the saved PCB copy. Reactivating a formerly ready/running suspended process returns it to ready; an unresolved resource wait remains blocked."
  },
  {
    "topic": "Processes & threads",
    "title": "PCBs, hierarchy, creation, and destruction",
    "source": "ZyBooks 2.3–2.4 · Challenges 2.3.1, 2.4.1",
    "objective": "Populate PCB fields, update sibling links, and trace process creation/destruction without confusing models.",
    "terms": [
      [
        "PCB",
        "A process control block is the OS record that stores the information needed to manage a process.",
        {
          "cue": "PCB = process’s management record.",
          "example": "It records process state, saved CPU state, memory information, scheduling data, resources, and family links; the scheduler and resource manager update these fields."
        }
      ],
      [
        "TCB",
        "A thread control block stores the information needed to manage and resume one thread.",
        {
          "cue": "TCB = one thread’s execution record.",
          "example": "Store its program counter, registers, stack pointer, and state; process-wide resources can remain in the process record."
        }
      ],
      [
        "Sibling representation",
        "A way to represent a process family using links to the parent, first child, and neighboring siblings.",
        {
          "cue": "Parent points up; sibling links connect children in creation order.",
          "example": "If P creates A then B: P.first_child=A, A.younger=B, B.older=A, and both children’s parent links point to P."
        }
      ],
      [
        "Array vs pointers",
        "A fixed PCB array reserves storage for every slot. An array of PCB pointers stores addresses of records that can be allocated as needed.",
        {
          "cue": "Reserved records versus separately allocated records.",
          "example": "PCB records[100] reserves 100 records; PCB *records[100] reserves 100 pointer slots and requires allocating each record before use."
        }
      ]
    ],
    "math": "Minimum bits for k distinct values = ceil(log₂ k). Fixed-array space = slots × bytes/PCB. Expected overflow scheme: r + p·o < s. k unconditional successful forks yield 2^k processes, including the original.",
    "method": "For a new child, update both directions of the parent-child relationship. The textbook create() initializes open files/resources to NULL; do not assume it duplicates fork() semantics. For destroy(), state whether descendants are recursively deleted or reparented. Splice both sibling links when deleting a middle child."
  },
  {
    "topic": "Processes & threads",
    "title": "Resources and priority decisions",
    "source": "ZyBooks 2.5 · Challenge 2.5.1",
    "objective": "Update ownership, resource waiting lists, the ready list, and the chosen process after each operation.",
    "terms": [
      [
        "RCB",
        "A resource control block is the OS record describing a resource’s availability and the processes waiting for it.",
        {
          "cue": "RCB = resource state plus waiting information.",
          "example": "For a single-unit resource, record whether it is free or allocated and keep a queue of blocked requesters."
        }
      ],
      [
        "Request",
        "An operation that asks the OS to allocate a resource to the calling process. If the resource is unavailable, the caller may have to block.",
        {
          "cue": "Available → allocate; unavailable → block and queue.",
          "example": "If A owns R and B requests it, add B to R’s waiting list and mark B blocked; B keeps its other resources in this course model."
        }
      ],
      [
        "Release",
        "An operation that gives up an owned resource so another process can use it.",
        {
          "cue": "Release may transfer ownership directly to a waiter.",
          "example": "For one unit, remove A’s ownership and give it to the head waiter B; B becomes ready. If no one waits, mark the unit free."
        }
      ],
      [
        "Ready list convention",
        "The course’s ZyBooks ready list contains both ready processes and the currently running process.",
        {
          "cue": "Course RL includes the running process; this is not a universal convention.",
          "example": "When a process blocks, remove it from RL. In the supplied priority examples, the largest numeric priority wins."
        }
      ]
    ],
    "math": "Multi-unit resource: available = total − allocated. State a queue policy: strict FIFO can leave units idle behind a large head request; bypass can improve utilization but risk starvation.",
    "method": "For each operation make a small table: process state, owned resources, resource queue, RL. Only then invoke scheduling. create() or release() can introduce a higher-priority runnable process and preempt the caller."
  },
  {
    "topic": "Processes & threads",
    "title": "Threads, pointers, and shared arguments",
    "source": "ZyBooks 2.6 · Module 2 goals · provided Pointers C file",
    "objective": "Reason about thread sharing/mapping and trace pointer values separately from pointed-to objects.",
    "terms": [
      [
        "Thread",
        "An independent path of execution within a process, with its own execution state but shared access to the process’s resources.",
        {
          "cue": "Process contains resources; thread executes instructions.",
          "example": "Two threads can run different functions using shared global data, while each has its own stack and saved registers."
        }
      ],
      [
        "Shared thread data",
        "Threads in the same process share its address space and resources, while each keeps its own execution state.",
        {
          "cue": "Shared globals and heap; separate stacks and CPU state.",
          "example": "Two threads incrementing the same global counter access the same object and may need synchronization. A private stack is not a guarantee that other threads cannot access it through a pointer."
        }
      ],
      [
        "User-level threads",
        "Threads managed by a user-space library rather than individually scheduled by the kernel.",
        {
          "cue": "The mapping to kernel threads determines blocking and parallelism.",
          "example": "With many user threads mapped to one kernel thread, a blocking system call can block them all, and they cannot execute on multiple cores simultaneously."
        }
      ],
      [
        "Kernel-level threads",
        "Threads that the OS kernel knows about and schedules independently.",
        {
          "cue": "The kernel schedules each thread.",
          "example": "When one kernel thread blocks for I/O, another can run; multiple kernel threads may execute on different cores at the same time."
        }
      ],
      [
        "Pointer / pointee",
        "A pointer variable stores a memory address. The pointee is the object at that address, not merely the value currently stored in it.",
        {
          "cue": "Pointer = stored address; pointee = object reached through that address.",
          "example": "int x = 10; int *p = &x; Here p stores x’s address, &x means address of x, and *p accesses x. Writing *p = 20 changes x to 20; copying p copies the address, not x."
        }
      ],
      [
        "Thread completion",
        "Waiting for a thread to finish lets another task safely use its completed result or reclaim storage it was using.",
        {
          "cue": "Keep arguments alive until the worker is done.",
          "example": "Use join before freeing a worker’s argument object. Give each worker a stable argument instead of passing every worker the address of the same changing loop variable."
        }
      ]
    ],
    "math": "Maximum simultaneous execution ≤ min(runnable threads, usable kernel threads, CPUs). Serial server average service = CPU cost + miss probability × disk wait. For stable average capacity, aim below the arrival interval.",
    "method": "Draw arrows from pointers to variables and update arrows only on pointer assignment. Update values on dereference assignment. In C, 5/2 is 2 with integer operands. For concurrency traces, use the stated atomic machine model; do not assume unsynchronized C data races have defined arithmetic outcomes."
  },
  {
    "topic": "Scheduling",
    "title": "Batch scheduling: build the timeline first",
    "source": "ZyBooks 3.1–3.2 · Challenge 3.2.1 · Module 3 goals",
    "objective": "Schedule FCFS, SJF, and SRT with arrivals; compute turnaround and separate it from CPU service.",
    "terms": [
      [
        "Long-term / short-term",
        "Long-term scheduling selects which jobs enter the active system. Short-term scheduling selects which ready task gets CPU time next.",
        {
          "cue": "Admission versus the next CPU turn.",
          "example": "Admitting a queued job is a long-term decision; choosing A instead of B after a timer interrupt is a short-term decision."
        }
      ],
      [
        "Preemptive / nonpreemptive",
        "Preemptive scheduling can take the CPU away from a running task. Nonpreemptive scheduling keeps it running until it finishes, blocks, or voluntarily yields.",
        {
          "cue": "Can the scheduler interrupt the current task to run another?",
          "example": "If a shorter job arrives while A runs, SRT can preempt A; nonpreemptive SJF waits until A gives up the CPU."
        }
      ],
      [
        "FCFS (FIFO)",
        "First-Come, First-Served runs ready tasks in arrival order without preempting the current task.",
        {
          "cue": "Earliest ready arrival goes first.",
          "example": "If A arrives at 0 with burst 5 and B arrives at 1 with burst 1, A runs 0–5 and B runs 5–6, assuming no overhead."
        }
      ],
      [
        "SJF (SJN)",
        "Shortest Job First chooses the ready task needing the shortest expected next stretch of CPU time. Once selected, it is not interrupted just because a shorter task arrives.",
        {
          "cue": "Choose the shortest ready CPU burst only when the CPU becomes available.",
          "example": "With all jobs ready and bursts A=8, B=3, C=5, run B, C, A. A CPU burst lasts until completion or blocking; the OS may estimate it from past behavior."
        }
      ],
      [
        "SRT",
        "Shortest Remaining Time is the preemptive version of SJF: it favors the ready task with the least CPU work remaining.",
        {
          "cue": "Compare remaining work, not original burst lengths.",
          "example": "A starts with 10 ms; after 2 ms it has 8 left. If B arrives needing 3 ms, SRT switches to B, assuming zero overhead."
        }
      ],
      [
        "Starvation",
        "A task waits indefinitely because other tasks keep receiving service ahead of it.",
        {
          "cue": "Others progress while one task keeps losing access.",
          "example": "A low-priority task can starve if high-priority work keeps arriving; priority aging can help by increasing its priority as it waits."
        }
      ]
    ],
    "math": "Turnaround T=C−A. Average turnaround = ΣT/n. CPU-only ready waiting = T−burst. First-dispatch delay = first start−arrival. Remaining = total CPU−attained CPU. Estimate τnext=α·actual+(1−α)·τold.",
    "method": "At each arrival/completion/quantum boundary: update the ready set, subtract actual service, apply the rule, resolve ties as stated. Never run a job before arrival. Under SJF do not interrupt the current job for a newly arriving shorter job. A ready job accumulates wall time, not attained CPU time."
  },
  {
    "topic": "Scheduling",
    "title": "RR, multilevel queues, and feedback",
    "source": "ZyBooks 3.3, 3.5 · Challenges 3.3.1, 3.5.1",
    "objective": "Trace queue movement and quantify responsiveness versus overhead.",
    "terms": [
      [
        "Round Robin (RR)",
        "A scheduling algorithm that gives each ready task a limited turn and returns unfinished runnable tasks to the back of the queue.",
        {
          "cue": "Fixed time quantum, then rotate.",
          "example": "With A=5, B=3, Q=2, both arriving at 0 and A first: A 0–2, B 2–4, A 4–6, B 6–7, A 7–8, with zero overhead."
        }
      ],
      [
        "Quantum Q",
        "The maximum CPU time allowed in one Round Robin turn; a task can finish or block before using it all.",
        {
          "cue": "A time limit, not a required run duration.",
          "example": "With Q=4 and only 1 ms remaining, a task runs 1 ms and leaves. In the course feedback model, track each level’s stated allotment separately."
        }
      ],
      [
        "Multilevel (ML)",
        "A CPU scheduling scheme that separates tasks into fixed priority queues, possibly using a different policy within each queue.",
        {
          "cue": "Multiple queues with fixed assignments in this model.",
          "example": "Serve a high-priority interactive queue before a lower-priority background queue; use RR inside a queue. Lower queues can starve if higher queues stay busy."
        }
      ],
      [
        "Multilevel feedback (MLF)",
        "A CPU scheduling scheme that moves tasks between priority queues according to their behavior.",
        {
          "cue": "Feedback changes priority; fixed multilevel scheduling does not.",
          "example": "In the course model, a new job starts at the top. After exhausting its allotment it moves down, and lower levels have doubled allotments: Q, 2Q, 4Q."
        }
      ],
      [
        "Two-tier / floating priority",
        "A scheduling design with a higher tier for real-time tasks and feedback scheduling below it. Floating priority adjusts a task’s priority after specified events.",
        {
          "cue": "Combine scheduling policies; compute event boosts from the stated base.",
          "example": "If base priority is 5 and a keyboard return adds 9, reentry priority is 14. Do not add the boost to a previous boosted value unless the problem says to."
        }
      ]
    ],
    "math": "Full-slice useful fraction=Q/(Q+S); overhead fraction=S/(Q+S). Per-process useful rate≈kQ/[n(Q+S)]. Gap between slices=(n−1)Q+nS for n saturated jobs. MLF allotment at level L=2^(N−L)Q; cumulative top k levels=Q(2^k−1).",
    "method": "Record the queue after every arrival and expiration. Remove completed jobs; use only remaining work on a partial slice. Count context switches according to the question’s convention, including/excluding initial and final charges explicitly. Large Q approaches FCFS; tiny Q can waste most CPU time."
  },
  {
    "topic": "Scheduling",
    "title": "Real-time decisions and parallel speedup",
    "source": "ZyBooks 3.4 · Challenge 3.4.1 · Module 3 goals",
    "objective": "Compare RM and EDF, test ideal capacity, and apply Amdahl’s law correctly.",
    "terms": [
      [
        "Period / deadline",
        "A period is the time between successive releases of a recurring task. A deadline is the time by which a particular job must finish.",
        {
          "cue": "Release spacing versus required finish time.",
          "example": "A job released at time 12 with period 5 has deadline 17 when deadlines equal periods; this equality is an assumption, not a universal rule."
        }
      ],
      [
        "Rate monotonic (RM)",
        "A real-time scheduling algorithm that assigns fixed higher priority to tasks with shorter periods.",
        {
          "cue": "Shorter period → higher fixed priority.",
          "example": "A task with period 4 outranks one with period 10, even if the latter’s current deadline is closer. The course model is preemptive."
        }
      ],
      [
        "Earliest deadline first (EDF)",
        "A real-time scheduling algorithm that runs the ready job with the nearest absolute deadline.",
        {
          "cue": "Earliest current deadline → highest priority.",
          "example": "At time 6, a job due at 8 outranks one due at 11. Recompute the choice when jobs arrive or finish; the course model is preemptive."
        }
      ],
      [
        "Feasible schedule",
        "A schedule that meets every required deadline under the stated workload and scheduling assumptions.",
        {
          "cue": "Every deadline, not just a good average.",
          "example": "One missed deadline makes the schedule infeasible. The EDF test U ≤ 1 requires the ideal assumptions listed in Essential math & rules."
        }
      ]
    ],
    "math": "U=Σ(Cᵢ/Tᵢ). For independent preemptible periodic tasks on one ideal CPU, no blocking/overhead, deadlines=periods: EDF feasible iff U≤1. Amdahl speedup=1/[s+(1−s)/N]; infinite-processor limit=1/s for s>0.",
    "method": "At each release, write the new absolute deadline. RM uses period, EDF uses deadline: they can disagree after a new release. U>1 proves overload in this model. The course’s ~0.7 RM discussion is not a hard failure threshold; trace RM when unsure. In Amdahl, divide only the parallel portion by N."
  },
  {
    "topic": "Concurrency",
    "title": "Races and critical-section requirements",
    "source": "ZyBooks 4.1 · Module 4 goals",
    "objective": "Find unsafe interleavings and distinguish exclusion, progress, starvation, and deadlock.",
    "terms": [
      [
        "Concurrency",
        "Multiple tasks make progress during overlapping time periods, possibly by taking turns on one CPU.",
        {
          "cue": "Overlapping progress does not require simultaneous execution.",
          "example": "One core alternates between a browser and editor; both progress over the same second even though only one executes at each instant."
        }
      ],
      [
        "Parallelism",
        "Multiple tasks execute at the same time on different processing units.",
        {
          "cue": "Simultaneous execution requires multiple execution units.",
          "example": "Two cores run two threads at once. Parallel tasks may still need locks when they share data."
        }
      ],
      [
        "Race condition",
        "A situation where the result depends on the timing or order of concurrent operations, which can produce incorrect behavior.",
        {
          "cue": "Different interleavings can change the result.",
          "example": "Two threads both read counter=0, each adds 1, and both write 1; one increment is lost unless the read-modify-write operation is protected."
        }
      ],
      [
        "Critical section",
        "A region of code that accesses shared resources and must be protected from conflicting concurrent operations.",
        {
          "cue": "Identify the shared operation that must stay indivisible to competitors.",
          "example": "Protect the whole read-modify-write of a shared counter, not just the final write."
        }
      ],
      [
        "Mutual exclusion",
        "A rule ensuring only one task at a time executes a particular protected critical section.",
        {
          "cue": "Only one inside the protected region.",
          "example": "A lock around a shared counter update can enforce exclusion; exclusion alone does not guarantee fairness or prevent all deadlocks."
        }
      ],
      [
        "Lockout prevention",
        "In the course’s critical-section requirements, a process that is not trying to enter must not prevent others from entering.",
        {
          "cue": "A nonparticipant must not hold up competitors.",
          "example": "A strict alternating-turn scheme can violate this when it is A’s turn but A is doing unrelated work and B wants to enter."
        }
      ],
      [
        "Deadlock / starvation",
        "Deadlock means a group cannot proceed because its members wait on one another. Starvation means a task waits indefinitely while other tasks continue progressing.",
        {
          "cue": "Deadlock: mutual waiting. Starvation: indefinite postponement.",
          "example": "A holds R1 and waits for R2 while B holds R2 and waits for R1: deadlock. A low-priority task repeatedly passed over: starvation."
        }
      ],
      [
        "Priority inversion / inheritance",
        "Priority inversion occurs when high-priority work waits for a resource held by lower-priority work. Priority inheritance temporarily raises the holder’s priority to reduce that delay.",
        {
          "cue": "Boost the resource holder so it can finish and release.",
          "example": "Low holds a lock needed by High, while Medium keeps preempting Low; inheriting High’s priority lets Low run ahead of Medium until it releases the lock."
        }
      ]
    ],
    "math": "Two instruction streams of lengths m and n have (m+n)!/(m!n!) order-preserving interleavings, if unconstrained. A high-level increment can expand to load, add, store.",
    "method": "Track each register separately from shared memory. A later stale store can erase an update. Strict alternation can cause lockout; two want-flags without a tie-break can deadlock. The course’s will_wait tie-break assumes atomic, sequentially consistent operations."
  },
  {
    "topic": "Concurrency",
    "title": "Semaphores and bounded buffers",
    "source": "ZyBooks 4.2–4.3 · Challenges 4.2.1, 4.3.1",
    "objective": "Build correct ordering/mutual-exclusion protocols and trace permits without mixing representations.",
    "terms": [
      [
        "Abstract P / V",
        "A semaphore controls access using permits. Atomic P waits for and consumes a permit; atomic V returns a permit or enables a waiting task.",
        {
          "cue": "P acquires; V releases; the operations must be atomic.",
          "example": "A counting semaphore initialized to 3 allows up to three resource users before another P must wait. This abstract permit model keeps the count nonnegative."
        }
      ],
      [
        "Signed internal count",
        "A semaphore implementation that subtracts before checking availability, using negative values to represent waiting tasks.",
        {
          "cue": "Negative s counts waiters in this implementation, not available permits.",
          "example": "Starting at s=0, two P calls produce s=−2 and two blocked waiters. V raises s to −1 and wakes one; the abstract permit model uses different bookkeeping."
        }
      ],
      [
        "Mutex-style semaphore",
        "A semaphore initialized to one and used to allow one task at a time into a critical section.",
        {
          "cue": "P before entry; V once after exit.",
          "example": "P(mutex); update shared data; V(mutex). Missing V can leave others blocked; extra V can destroy exclusion. Starvation freedom also needs fair admission."
        }
      ],
      [
        "Busy waiting",
        "Repeatedly checking a condition while continuing to consume CPU time.",
        {
          "cue": "Waiting by running, rather than sleeping.",
          "example": "A spin loop repeatedly tests a lock. Spinning may suit short waits; blocking avoids burning CPU during long waits."
        }
      ],
      [
        "Lost wakeup",
        "A bug where a task misses a notification and then sleeps even though the event it needed has already happened.",
        {
          "cue": "Checking, registering the wait, and releasing the lock must be coordinated.",
          "example": "A checks false, B signals before A joins the wait queue, then A sleeps. A correct condition-wait operation prevents this gap."
        }
      ]
    ],
    "math": "Ring next=(next+1) mod N. For distinct indices and no in-flight operation: occupied=(in−out+N) mod N. Equal indices may mean empty or full. At completed-operation boundaries: empty+full=N; reservations can temporarily reduce that sum.",
    "method": "For multiple producers/consumers initialize empty=N, full=0, mutex=1. Producer: P(empty), P(mutex), insert, V(mutex), V(full). Consumer: P(full), P(mutex), remove, V(mutex), V(empty). Do not wait for availability while holding the buffer mutex. Define TAS’s returned value before tracing it."
  },
  {
    "topic": "Concurrency",
    "title": "Monitors, condition variables, and wakeups",
    "source": "ZyBooks 4.4 · Challenge 4.4.1 · Module 4 goals",
    "objective": "Trace monitor queues, distinguish signals from permits, and adapt predicate checks to signal semantics.",
    "terms": [
      [
        "Monitor",
        "A synchronization construct that groups shared data with operations that execute under mutual exclusion, plus condition queues for waiting.",
        {
          "cue": "Protected shared data + exclusive operations + condition waiting.",
          "example": "A bounded-buffer monitor provides deposit and remove operations; a producer waits on notfull when no slot is available."
        }
      ],
      [
        "Condition wait",
        "A monitor operation that suspends the caller on a condition queue and releases monitor ownership so another task can change the condition.",
        {
          "cue": "Wait releases ownership and blocks; it does not consume a stored permit.",
          "example": "An empty-buffer consumer calls wait(notempty), allowing a producer to enter and deposit an item."
        }
      ],
      [
        "Condition signal",
        "A monitor operation that notifies a task already waiting on a condition queue; if no task waits, no notification credit is saved.",
        {
          "cue": "A signal is not a stored semaphore permit.",
          "example": "A producer signals notempty after a deposit. Who runs next depends on whether the monitor uses Hoare or Mesa semantics."
        }
      ],
      [
        "Hoare-style signal",
        "A signal immediately hands monitor execution to a waiting task; the signaler waits in an urgent queue.",
        {
          "cue": "Waiter runs now; signaler waits.",
          "example": "After a producer signals a waiting consumer, the consumer continues inside the monitor before the producer resumes, under the supplied course model."
        }
      ],
      [
        "Mesa / Java-style notification",
        "A notification lets the signaling task continue; the waiting task must later reacquire the lock and recheck the condition.",
        {
          "cue": "Signaler continues; waiter uses while, not a one-time if.",
          "example": "while (bufferEmpty) wait(); rechecks emptiness because another task may consume the item before the awakened consumer gets the lock."
        }
      ],
      [
        "Priority wait",
        "A condition-wait scheme that orders waiting tasks by a supplied priority value instead of only arrival order.",
        {
          "cue": "The supplied value determines queue order.",
          "example": "An alarm monitor can sort by absolute wakeup time; signaling one due waiter can start a chain that releases other waiters due at the same time."
        }
      ]
    ],
    "math": "Course Hoare implementation with k condition variables: k+2 semaphores (k condition semaphores, one mutex, one urgent). Initial values: mutex=1; condition and urgent semaphores=0.",
    "method": "Draw separate entry, condition, and urgent queues. With Hoare semantics, pause the signaler when a waiter exists; prefer urgent continuations over outside entrants. With Java-style waits, use while(!condition) wait() under the same lock protecting that condition. Distinct synchronized receivers are distinct locks."
  },
  {
    "topic": "Concurrency",
    "title": "Classic synchronization problems",
    "source": "ZyBooks 4.5 · Challenge 4.5.1",
    "objective": "Analyze both safety and progress in readers-writers, dining philosophers, and elevator scheduling.",
    "terms": [
      [
        "Readers-writers",
        "A shared-data synchronization problem where multiple readers may access data together, but a writer needs exclusive access.",
        {
          "cue": "Readers can share; a writer excludes everyone else.",
          "example": "The course policy blocks new readers behind a waiting writer and admits accumulated readers after an active writer finishes; do not assume every implementation has that policy."
        }
      ],
      [
        "Dining philosophers",
        "A synchronization problem in which each participant needs two neighboring shared resources to proceed, modeling competition for multiple resources.",
        {
          "cue": "Neighbors cannot use their shared resource together; avoid circular waiting.",
          "example": "Five philosophers each need their left and right fork. If everyone holds one fork and waits for the other, they deadlock; nonadjacent philosophers can safely eat together."
        }
      ],
      [
        "Monitor test(i)",
        "A helper in the monitor solution to Dining Philosophers that checks whether philosopher i is hungry and neither neighbor is eating. If so, it marks i as eating and signals i.",
        {
          "cue": "A problem-specific helper, not a general monitor operation.",
          "example": "if hungry(i) and not eating(left) and not eating(right): set eating(i); signal(i). putdown marks the finisher thinking and tests both neighbors; signal timing follows the monitor model."
        }
      ],
      [
        "Elevator algorithm",
        "A disk-scheduling policy that serves requests along one direction before reversing to serve requests in the other direction.",
        {
          "cue": "Sweep in order, then reverse; use the course’s turnaround rule.",
          "example": "The course uses LOOK-style reversal at the last requested track, not the physical disk end. Add the absolute distance between successive head positions to compute travel."
        }
      ]
    ],
    "math": "On a ring of N philosophers, neighbors are (i−1+N) mod N and (i+1) mod N. Disk travel=Σ|next position−current position|.",
    "method": "For readers-writers, track active readers, active writer, and both queues. For philosophers, prove deadlock prevention separately from fairness and concurrency: a global fork order breaks cycles but may still restrict concurrency. For the elevator, sort in each direction and include the initial head position in travel."
  }
];
window.FLASHCARDS = GUIDE.flatMap(g=>g.terms.map(([front,back,notes])=>({topic:g.topic,front,back,...notes,source:g.source})));
