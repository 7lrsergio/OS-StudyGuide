window.GUIDE = [
  {
    "topic": "Foundations",
    "title": "The OS as a controlled, extended machine",
    "source": "ZyBooks 1.1–1.2 · Module 1 goals",
    "objective": "Distinguish abstraction from virtualization; trace safe entry to the kernel and classify interrupts.",
    "terms": [
      [
        "Abstraction",
        "Hiding unnecessary implementation details to provide a simpler way to understand or use a system."
      ],
      [
        "Virtualization",
        "Making physical resources appear as independent or different logical resources, allowing hardware to be shared. It does not necessarily improve speed."
      ],
      [
        "Kernel / privilege",
        "The kernel is the core of the OS that manages resources and protection. Kernel mode allows privileged operations; user mode restricts them."
      ],
      [
        "System call / supervisor call",
        "A system call requests an OS service. In the course model, a supervisor call transfers control to the kernel to handle that request."
      ],
      [
        "Interrupt / trap",
        "An interrupt alerts the CPU to an external event, such as a timer or device. A trap occurs because of the executing instruction, such as a deliberate system call."
      ],
      [
        "Shell",
        "A command interpreter; scripts compose and repeat operations. A GUI offers visual interaction. Neither is synonymous with the kernel."
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
        "Keep several programs active so another can use the CPU while one waits for I/O."
      ],
      [
        "Time-sharing",
        "Preempt and rotate CPU service to provide responsive concurrent execution."
      ],
      [
        "CPU-bound / I/O-bound",
        "Work dominated by computation / work frequently waiting for input or output."
      ],
      [
        "Byte / word",
        "A byte has 8 bits; word size depends on the machine and must be specified."
      ],
      [
        "Environments",
        "Mainframe: bulk throughput. Server: responsiveness/security. Multiprocessor: parallelism and data consistency. Distributed: communication across independent computers. Real-time: deadlines. Sensor network: power and fault tolerance."
      ],
      [
        "Evolution",
        "Vacuum tubes → no OS; transistors → batch/multiprogramming; integrated circuits → interactive time-sharing; microprocessors → personal computers/GUI; networks → distributed/mobile systems."
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
        "Use a finished provider-hosted application."
      ],
      [
        "PaaS",
        "Deploy your application on a provider-managed platform/runtime."
      ],
      [
        "IaaS",
        "Rent infrastructure such as virtual machines; the customer typically manages the guest OS and application."
      ],
      [
        "Open source",
        "Licensing permits use, inspection, modification, and redistribution under its terms. Source visibility or zero price alone is insufficient."
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
        "A program is stored instructions; a process is an executing instance of a program, with its own state and resources. A process can be ready or blocked as well as currently running."
      ],
      [
        "Ready / running / blocked",
        "Eligible for CPU / executing / waiting for an unavailable resource or event."
      ],
      [
        "Context switch",
        "Saving one thread’s or process’s CPU state and restoring another’s so execution can switch between them and later resume correctly. The scheduler chooses who runs; the context switch carries out that change."
      ],
      [
        "New / suspended / terminated",
        "Not yet admitted / explicitly prevented from running / finished but possibly retained for cleanup or inspection."
      ],
      [
        "Virtual CPU benefits",
        "CPU time-sharing lets each process behave as if it has its own CPU, while sharing physical processors. Instruction-set emulation is a separate capability of some virtualization systems, not an automatic benefit of CPU scheduling."
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
        "Process control block: saved CPU state, process state, memory, scheduling, accounting, open files, other resources, parent, children."
      ],
      [
        "TCB",
        "Thread control block: per-thread control state, including PC/registers, stack pointer, and thread state."
      ],
      [
        "Sibling representation",
        "parent points upward; first_child points to oldest child; older/younger links connect adjacent siblings."
      ],
      [
        "Array vs pointers",
        "A fixed PCB array reserves all slots but avoids per-record allocation. An array of pointers allocates records as needed, adding allocation overhead."
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
        "Resource control block: resource state and waiting list, plus implementation-specific metadata."
      ],
      [
        "Request",
        "Allocate a free resource; otherwise block the caller and move it to the resource’s wait list. Already-held resources are retained."
      ],
      [
        "Release",
        "Remove ownership; transfer a single unit to the head waiter if one exists, otherwise mark it free. The awakened process becomes ready."
      ],
      [
        "Ready list convention",
        "In these ZyBooks algorithms RL includes the running process as well as ready processes. Larger numeric priorities win in the provided examples."
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
        "An independent path of execution within a process. Threads share process resources but have their own execution state."
      ],
      [
        "Shared thread data",
        "Threads in a process share code, globals, address space, and resources/open files. Each has an independent stack and CPU state."
      ],
      [
        "User-level threads",
        "Managed by a user-space library rather than individually by the kernel. In many-to-one mapping, one blocking system call can block all the mapped user threads."
      ],
      [
        "Kernel-level threads",
        "Managed and scheduled by the OS kernel. They can run independently, including simultaneously on different CPU cores."
      ],
      [
        "Pointer / pointee",
        "p is an address; *p is the object at that address; &x is the address of x. Copying a pointer creates an alias, not a copy of the object."
      ],
      [
        "Thread completion",
        "Join/wait before reclaiming argument storage or reading results that require completion. Use distinct stable arguments when a loop launches multiple workers."
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
        "Long-term scheduling decides which jobs enter the active system. Short-term scheduling decides which ready thread or process gets CPU time next."
      ],
      [
        "Preemptive / nonpreemptive",
        "Preemptive scheduling can interrupt a running task. Nonpreemptive scheduling lets it keep the CPU until it finishes, blocks, or voluntarily yields."
      ],
      [
        "FCFS (FIFO)",
        "Select earliest arrival; nonpreemptive."
      ],
      [
        "SJF (SJN)",
        "Runs the ready process with the shortest predicted next CPU burst, without preempting it."
      ],
      [
        "SRT",
        "Select smallest remaining CPU requirement; preemptive SJF."
      ],
      [
        "Starvation",
        "An eligible process can be postponed indefinitely while other processes continue progressing."
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
        "Gives each ready task a time quantum. If it still needs CPU time afterward, it goes back into the ready queue."
      ],
      [
        "Quantum Q",
        "Maximum service before a RR rotation or feedback demotion; a job may finish/block earlier."
      ],
      [
        "Multilevel (ML)",
        "Separate fixed priority queues; RR within a queue does not prevent starvation between queues."
      ],
      [
        "Multilevel feedback (MLF)",
        "Behavior changes priority; in the course model new jobs start at the top, then descend with doubled allotments."
      ],
      [
        "Two-tier / floating priority",
        "Higher tier for real-time work; MLF below. Event boost is added to base priority, not necessarily current priority."
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
        "Period is release spacing; deadline is the time by which one job must finish. In these ideal periodic questions deadline equals release+period."
      ],
      [
        "Rate monotonic (RM)",
        "Fixed higher priority for shorter periods; preemptive."
      ],
      [
        "Earliest deadline first (EDF)",
        "Dynamic priority by the earliest current absolute deadline; preemptive."
      ],
      [
        "Feasible schedule",
        "All deadlines are met, not just a good average or high utilization."
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
        "Multiple tasks make progress over overlapping periods, whether by taking turns on one CPU or running in parallel."
      ],
      [
        "Parallelism",
        "Multiple tasks execute simultaneously on different processing units, such as CPU cores."
      ],
      [
        "Race condition",
        "When the result depends on the timing or order of concurrent operations, potentially producing incorrect results."
      ],
      [
        "Critical section",
        "Code that accesses shared resources and must be protected from conflicting concurrent operations."
      ],
      [
        "Mutual exclusion",
        "Ensures only one thread or process at a time enters a particular critical section."
      ],
      [
        "Lockout prevention",
        "A process not trying to enter must not keep competitors out."
      ],
      [
        "Deadlock / starvation",
        "Deadlock: tasks cannot proceed because they are waiting on one another. Starvation: a task waits indefinitely while others continue progressing."
      ],
      [
        "Priority inversion / inheritance",
        "Inversion: high-priority work waits on a low-priority resource holder. Inheritance: temporarily boost that holder’s priority to reduce the delay."
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
        "A semaphore is a synchronization counter controlling access to resources. Its atomic P operation waits for and consumes a permit; V adds a permit or enables a waiting task."
      ],
      [
        "Signed internal count",
        "An implementation may decrement before checking: negative s counts blocked waiters. V wakes one when the incremented value is ≤0."
      ],
      [
        "Mutex-style semaphore",
        "Initialize to 1; acquire before CS and release exactly once afterward. Fair wakeup/admission policy is needed for starvation guarantees."
      ],
      [
        "Busy waiting",
        "Repeatedly test a lock while consuming CPU. Blocking can be better for long waits."
      ],
      [
        "Lost wakeup",
        "A notification occurs between releasing an internal lock and registering/blocking the waiter; the wait protocol must coordinate these steps."
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
        "Encapsulated shared data and mutually exclusive operations, with condition queues that allow waiting outside ownership."
      ],
      [
        "Condition wait",
        "Always blocks and releases monitor ownership; it is not a semaphore P consuming a stored permit."
      ],
      [
        "Condition signal",
        "Wakes a waiter if present; no stored credit if the queue is empty."
      ],
      [
        "Hoare-style signal",
        "The supplied main monitor model hands execution immediately to the waiter; the signaler waits urgently."
      ],
      [
        "Mesa / Java-style notification",
        "The signaling thread continues running. A waiting thread must reacquire the lock and recheck the condition using while."
      ],
      [
        "Priority wait",
        "Orders condition waiters by a value, such as absolute wakeup time. Equal-time alarm waiters can be released by chained signals."
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
        "Multiple readers may share; a writer requires exclusive access. Course policy stops new readers behind a waiting writer, then admits accumulated readers after an active writer finishes."
      ],
      [
        "Dining philosophers",
        "Each needs two adjacent forks. Avoid a cycle of partial acquisitions while permitting nonadjacent philosophers to eat."
      ],
      [
        "Monitor test(i)",
        "If i is hungry and neither neighbor eats, mark i eating and signal it. putdown tests neighbors after releasing the current state."
      ],
      [
        "Elevator algorithm",
        "Continue a directional sweep through pending requests, then reverse when none remain ahead. The course reverses at the last requested track (LOOK-style), not necessarily at a physical endpoint."
      ]
    ],
    "math": "On a ring of N philosophers, neighbors are (i−1+N) mod N and (i+1) mod N. Disk travel=Σ|next position−current position|.",
    "method": "For readers-writers, track active readers, active writer, and both queues. For philosophers, prove deadlock prevention separately from fairness and concurrency: a global fork order breaks cycles but may still restrict concurrency. For the elevator, sort in each direction and include the initial head position in travel."
  }
];
window.FLASHCARDS = GUIDE.flatMap(g=>g.terms.map(([front,back])=>({topic:g.topic,front,back,source:g.source})));
