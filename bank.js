/* Original practice questions derived from the supplied course materials. */
window.QUESTION_BANK = [
  {
    "id": "Q001",
    "topic": "Foundations",
    "source": "ZyBooks 1.1 · Challenge 1.1.1",
    "prompt": "A starts at 0 and needs CPU 12, then I/O 18. B needs CPU 8, then I/O 25. One CPU, independent I/O devices, no overhead; A runs first. What are the sequential and multiprogrammed completion times?",
    "options": [
      "63 and 45",
      "63 and 38",
      "45 and 33",
      "63 and 33"
    ],
    "correct": 0,
    "explanation": "Sequential: 12+18+8+25=63. With overlap, A finishes at 30; B uses CPU 12–20 and I/O 20–45. Both finish at max(30,45)=45."
  },
  {
    "id": "Q002",
    "topic": "Foundations",
    "source": "ZyBooks 1.1 · timing",
    "prompt": "A and B each need CPU 10 followed by I/O 10 on independent devices. Both arrive at 0. With ideal equal time-sharing (negligible quantum and overhead), when do both finish?",
    "options": [
      "30",
      "20",
      "40",
      "25"
    ],
    "correct": 0,
    "explanation": "Each gets half the CPU, so both finish their CPU phase at approximately 20. Their independent I/O phases then overlap from 20 to 30."
  },
  {
    "id": "Q003",
    "topic": "Foundations",
    "source": "ZyBooks 1.1 · timing",
    "prompt": "A: CPU 6 then I/O 20. B: CPU 9 then I/O 4. Both arrive at 0; A first; independent devices; nonpreemptive CPU phases; no overhead. What is CPU utilization from 0 until both finish?",
    "options": [
      "15/26 ≈ 57.7%",
      "15/39 ≈ 38.5%",
      "15/20 = 75%",
      "100%"
    ],
    "correct": 0,
    "explanation": "A uses CPU 0–6 and I/O 6–26. B uses CPU 6–15 and I/O 15–19. The makespan is 26 and CPU busy time is 15."
  },
  {
    "id": "Q004",
    "topic": "Foundations",
    "source": "ZyBooks 1.1 · abstraction / virtualization",
    "prompt": "An OS exposes copy_file() instead of disk-controller operations, and makes each process see a private CPU. Which interpretation is most precise?",
    "options": [
      "The file operation illustrates abstraction; the private CPU illustrates virtualization",
      "Both examples require extra physical hardware",
      "The file operation is virtualization only; the CPU is abstraction only",
      "Abstraction always requires multiple simulated objects"
    ],
    "correct": 0,
    "explanation": "Abstraction hides implementation detail behind a higher-level operation. Virtualization creates the illusion of a different or private resource; it may itself use abstraction."
  },
  {
    "id": "Q005",
    "topic": "Foundations",
    "source": "ZyBooks 1.2 · system and supervisor calls",
    "prompt": "A library wrapper prepares parameters, executes a supervisor call, and returns. Which step provides the controlled user-to-kernel transition?",
    "options": [
      "The supervisor call using a defined kernel entry",
      "Entering any library function",
      "Calling an arbitrary kernel address",
      "Returning from the wrapper"
    ],
    "correct": 0,
    "explanation": "Ordinary calls do not grant kernel privilege. The supervisor-call mechanism transfers control through an approved entry and changes mode; the wrapper initially executes in user mode."
  },
  {
    "id": "Q006",
    "topic": "Foundations",
    "source": "ZyBooks 1.2 · interrupts and traps",
    "prompt": "While B computes, A’s disk operation completes. Later B divides by zero in the course machine model. Which event pair is correct?",
    "options": [
      "External interrupt, then instruction-caused trap",
      "Trap, then external interrupt",
      "Two external interrupts",
      "Two context switches necessarily to a different process"
    ],
    "correct": 0,
    "explanation": "Disk completion is asynchronous hardware notification. The erroneous instruction causes a synchronous trap. Entering a handler does not by itself require switching to another process."
  },
  {
    "id": "Q007",
    "topic": "Foundations",
    "source": "ZyBooks 1.2 · Challenge 1.2.1",
    "prompt": "A executes a1,a2,a3,a4; B executes b1,b2,b3. A starts. Switch immediately after a2 and b1; no further timer interrupts; switch on termination. What is the trace?",
    "options": [
      "a1,a2,b1,a3,a4,b2,b3",
      "a1,a2,b1,b2,a3,a4,b3",
      "a1,b1,a2,b2,a3,b3,a4",
      "a1,a2,b1,a3,b2,a4,b3"
    ],
    "correct": 0,
    "explanation": "Preserve each program’s instruction order. The first interrupt transfers A→B, the second B→A. A then finishes, allowing B to complete."
  },
  {
    "id": "Q008",
    "topic": "Foundations",
    "source": "ZyBooks 1.2 · modes and protection",
    "prompt": "Why must an application not be able to set the CPU mode bit directly to kernel mode?",
    "options": [
      "It could bypass protected entry points and execute privileged operations",
      "It would make all ordinary arithmetic invalid",
      "Mode changes are unnecessary for OS services",
      "Kernel mode prohibits nonprivileged instructions"
    ],
    "correct": 0,
    "explanation": "Protection requires controlled transitions. Kernel mode permits both privileged and nonprivileged instructions; unrestricted access would defeat the privilege boundary."
  },
  {
    "id": "Q009",
    "topic": "Foundations",
    "source": "Module 1 goals · units",
    "prompt": "A table has 2^18 entries, each one 64-bit word. Ignore metadata. How much storage does it occupy?",
    "options": [
      "2 MiB",
      "16 MiB",
      "256 KiB",
      "2 MB exactly"
    ],
    "correct": 0,
    "explanation": "A 64-bit word is 8 bytes here. 2^18 × 8 = 2^21 bytes = 2 MiB. Decimal MB and binary MiB are not interchangeable."
  },
  {
    "id": "Q010",
    "topic": "Foundations",
    "source": "Module 1 goals · units",
    "prompt": "A file is exactly 3,000,000 bytes. Approximately how many MiB is it? Use 1 MiB = 2^20 bytes.",
    "options": [
      "2.861 MiB",
      "3.000 MiB",
      "3.146 MiB",
      "24.000 MiB"
    ],
    "correct": 0,
    "explanation": "Divide bytes by 1,048,576: about 2.861. Multiplying by eight would convert bytes to bits, not to MiB."
  },
  {
    "id": "Q011",
    "topic": "Foundations",
    "source": "ZyBooks 1.3 · Moore’s law",
    "prompt": "Using the course’s idealized doubling every two years, a chip starts with 50 million transistors. How many after six years?",
    "options": [
      "400 million",
      "150 million",
      "300 million",
      "800 million"
    ],
    "correct": 0,
    "explanation": "Six years contains three doublings: 50 × 2^3 = 400 million. This is a transistor-count model, not a guarantee of equal application speedup."
  },
  {
    "id": "Q012",
    "topic": "Foundations",
    "source": "ZyBooks 1.3 · evolution",
    "prompt": "Which historical pairing correctly explains a change in OS capabilities in the course model?",
    "options": [
      "Integrated circuits → interactive multi-user systems and time-sharing",
      "Vacuum tubes → mature GUI desktop OSs",
      "Transistors → wireless sensor networks",
      "Microprocessors → the first absence of any OS"
    ],
    "correct": 0,
    "explanation": "The course links integrated circuits to third-generation interactive multi-user systems, and microprocessors/VLSI to fourth-generation personal computers."
  },
  {
    "id": "Q013",
    "topic": "Foundations",
    "source": "ZyBooks 1.3 · application environments",
    "prompt": "One system processes payroll in bulk; another controls aircraft actuators. Which scheduling priorities best fit them?",
    "options": [
      "High throughput for payroll; meeting deadlines for control",
      "Lowest average turnaround alone for both",
      "Interactive GUI response for payroll; maximum batch size for control",
      "Maximum CPU utilization is sufficient to guarantee both goals"
    ],
    "correct": 0,
    "explanation": "Bulk processing emphasizes throughput. Real-time control requires results by deadlines; a busy CPU or a good average does not guarantee timely individual results."
  },
  {
    "id": "Q014",
    "topic": "Foundations",
    "source": "Module 1 goals · SaaS / PaaS / IaaS",
    "prompt": "A team deploys its own application onto a provider-managed runtime without managing the guest OS. Which service model best fits, and why?",
    "options": [
      "PaaS: the team manages the application while the provider manages its platform",
      "SaaS: the team only uses a finished application",
      "IaaS: the team must manage the guest OS",
      "Open source: the service must expose all source code"
    ],
    "correct": 0,
    "explanation": "PaaS supplies the runtime/platform. IaaS commonly supplies virtual infrastructure with the customer managing a guest OS. SaaS supplies the finished application."
  },
  {
    "id": "Q015",
    "topic": "Foundations",
    "source": "Module 1 goals · open source",
    "prompt": "An OS vendor publishes source for viewing but forbids modification and redistribution. Is source visibility alone sufficient to call it open source?",
    "options": [
      "No; open-source licensing includes rights to modify and redistribute",
      "Yes, any readable source is open source",
      "Yes, provided the binary is free of charge",
      "No, because open-source software cannot be sold"
    ],
    "correct": 0,
    "explanation": "Source availability alone is insufficient. Open source concerns licensing rights, not merely price or whether source can be inspected."
  },
  {
    "id": "Q016",
    "topic": "Foundations",
    "source": "ZyBooks 1.1–1.2 · time-sharing",
    "prompt": "A CPU-bound process never voluntarily yields. Which facility enables the OS to enforce time-sharing on one CPU?",
    "options": [
      "Periodic timer interrupts that let the kernel preempt it",
      "A larger disk buffer",
      "Waiting only for that process to issue I/O",
      "Compiling all applications into one executable"
    ],
    "correct": 0,
    "explanation": "Multiprogramming can switch when a process blocks; a compute-only process may never block. A timer gives the kernel control to enforce a quantum."
  },
  {
    "id": "Q017",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.1 · process / PCB",
    "prompt": "Two users run the same executable but reach different instructions and hold different files. What must be distinct?",
    "options": [
      "Their PCBs and execution states, even if executable code is shared",
      "The source code text must differ",
      "They must use different physical CPUs",
      "They can use one PCB because the executable is identical"
    ],
    "correct": 0,
    "explanation": "A program is code; a process is an executing instance with its own state and resources. The OS represents each instance with a PCB."
  },
  {
    "id": "Q018",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.1 · Challenge 2.1.1",
    "prompt": "In the basic three-state model, P waits for disk input, the disk completes, and P later receives the CPU. Which path is valid?",
    "options": [
      "running → blocked → ready → running",
      "running → ready → blocked → running",
      "running → blocked → running → ready",
      "ready → blocked → ready → running"
    ],
    "correct": 0,
    "explanation": "Waiting for unavailable input blocks the running process. Completion makes it ready; a separate dispatch makes it running."
  },
  {
    "id": "Q019",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.1 · suspended processes",
    "prompt": "A ready process is suspended for debugging. All resources remain available. After explicit reactivation, what state should it enter in the course model?",
    "options": [
      "Ready, awaiting dispatch",
      "Running immediately regardless of other processes",
      "Blocked on an unspecified resource",
      "New, with a new identity"
    ],
    "correct": 0,
    "explanation": "Suspension prevents scheduling even when resources are available. Reactivation of a formerly ready or running process returns it to ready."
  },
  {
    "id": "Q020",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.1 · context switch",
    "prompt": "P is running. Its PCB contains saved PC=100, but the physical CPU is now at PC=140. Before dispatching Q, what must the OS do?",
    "options": [
      "Save P’s current registers and flags, then restore Q’s saved state",
      "Restore P’s stale saved PC before saving it",
      "Copy only P’s process-state label",
      "Overwrite Q’s saved state with P’s registers"
    ],
    "correct": 0,
    "explanation": "While P runs, its current state is in the CPU and the PCB copy may be stale. Save before overwriting the CPU with Q’s state."
  },
  {
    "id": "Q021",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.2 · virtual CPUs",
    "prompt": "Three single-threaded, independent CPU-bound processes run on two physical CPUs. With no other bottlenecks, what changes when CPUs increase from two to four?",
    "options": [
      "At most three processes run simultaneously; the fourth CPU adds no further process-level parallelism",
      "All four CPUs can run these three single-threaded processes simultaneously",
      "Each process must be rewritten to use any extra CPU",
      "Virtual CPUs guarantee a fourfold speedup"
    ],
    "correct": 0,
    "explanation": "There are only three execution streams. Virtual CPUs provide independence from the number of physical CPUs, not unlimited parallelism."
  },
  {
    "id": "Q022",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.2 · portability",
    "prompt": "An executable contains a floating-point instruction missing from a replacement CPU. How can the virtual-CPU approach preserve execution?",
    "options": [
      "Emulate that instruction in software, potentially at lower speed",
      "Delete the instruction and preserve the result automatically",
      "Use time-sharing alone to add the instruction to hardware",
      "Guarantee equal speed without translating or emulating it"
    ],
    "correct": 0,
    "explanation": "Virtual CPUs may emulate a different instruction set. Portability does not imply identical performance."
  },
  {
    "id": "Q023",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.3 · generic PCB",
    "prompt": "A process is billed for accumulated CPU use and scheduled by an external priority. Which PCB fields serve these two distinct roles?",
    "options": [
      "Accounting information; scheduling information",
      "Memory; open files",
      "CPU state; parent",
      "Children; other resources"
    ],
    "correct": 0,
    "explanation": "Accounting records resource consumption for billing; scheduling information records priority and other selection inputs. Saved register values have a different purpose."
  },
  {
    "id": "Q024",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.3 · PCB representation",
    "prompt": "An OS represents six process states plus an unused/free-slot marker in a packed field. What is the minimum number of bits?",
    "options": [
      "3",
      "2",
      "6",
      "7"
    ],
    "correct": 0,
    "explanation": "Seven distinguishable values require ceil(log2 7)=3 bits. A C object may occupy a full byte or more, but the question asks the information minimum."
  },
  {
    "id": "Q025",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.3 · organizing PCBs",
    "prompt": "A fixed array has 4,096 slots, each PCB 256 bytes. Only 100 are active. Ignoring allocation metadata, how much PCB storage does the array reserve?",
    "options": [
      "1 MiB",
      "25 KiB",
      "32 KiB",
      "4 MiB"
    ],
    "correct": 0,
    "explanation": "The fixed array reserves every slot: 4096×256 = 1,048,576 bytes. Active records alone would occupy 25,600 bytes, but unused array slots remain reserved."
  },
  {
    "id": "Q026",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.3 · PCB management exercise",
    "prompt": "An array insertion costs r=2 units plus overflow cost o=40 with probability p. A linked-list insertion costs s=6. Under this cost model, when is the array faster on average?",
    "options": [
      "p < 0.10",
      "p < 0.15",
      "p > 0.10",
      "For every p ≤ 1"
    ],
    "correct": 0,
    "explanation": "Expected cost is r+po = 2+40p. Requiring 2+40p<6 gives p<0.10; equality is a tie."
  },
  {
    "id": "Q027",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.3 · Challenge 2.3.1",
    "prompt": "Parent 8 has children 2,5,9 in creation order. In the first-child/older-sibling/younger-sibling representation, what are (8.first_child, 5.older, 5.younger, 9.parent)?",
    "options": [
      "(2,2,9,8)",
      "(9,2,9,8)",
      "(2,8,9,5)",
      "(2,9,2,8)"
    ],
    "correct": 0,
    "explanation": "The first child is the oldest. Child 5’s adjacent siblings are 2 and 9, while all three children have parent 8."
  },
  {
    "id": "Q028",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.3 · sibling links",
    "prompt": "Parent 8 has children 2,5,9 in that order. Remove child 5 only. Which updates reconnect the remaining siblings?",
    "options": [
      "2.younger=9 and 9.older=2",
      "8.first_child=9 and 2.parent=9",
      "2.younger=NULL and 9.older=NULL",
      "9.younger=2 and 2.older=9"
    ],
    "correct": 0,
    "explanation": "Deleting a middle child splices its neighbors together. Parent 8’s first child remains 2 and both surviving parent links remain 8."
  },
  {
    "id": "Q029",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.4 · Challenge 2.4.1",
    "prompt": "In the textbook create(state0,mem0,sched0,acc0), running process 3 creates PCB 7. Before scheduler(), which combination is correct?",
    "options": [
      "7.parent=3; 7.state=ready; 7.open_files=NULL",
      "7.parent=7; 7.state=running; 7.open_files=NULL",
      "3.parent=7; 7.state=blocked; 7.open_files=NULL",
      "7.parent=3; 7.state=new; all initial registers=NULL"
    ],
    "correct": 0,
    "explanation": "This is the textbook three-state create model: parent=self, state=ready, initial CPU state supplied by a parameter, and initially no open files. It is not a specification of fork inheritance."
  },
  {
    "id": "Q030",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.4 · destruction",
    "prompt": "Use recursive descendant destruction. P has children A,B; A has child C; B has children D,E. How many PCBs are removed by destroy(A), including A?",
    "options": [
      "2",
      "1",
      "3",
      "6"
    ],
    "correct": 0,
    "explanation": "Only A’s subtree is removed: A and C. Sibling B and B’s descendants remain. Other OS policies may reparent children, so the policy matters."
  },
  {
    "id": "Q031",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.5 · Challenge 2.5.1",
    "prompt": "P owns resource R; Q and T wait for it in that order. P releases R. What does the course’s single-unit release() do before scheduling?",
    "options": [
      "Give R to Q, make Q ready, leave T waiting and R allocated",
      "Mark R free and unblock both Q and T",
      "Make Q running without consulting the scheduler",
      "Leave R owned by P until Q voluntarily asks again"
    ],
    "correct": 0,
    "explanation": "Release transfers ownership to the head waiter and puts that process on RL. The resource stays allocated. Ready is not the same as running."
  },
  {
    "id": "Q032",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.5 · resource request",
    "prompt": "Running P owns R1 and requests R2, which Q owns. Under the textbook request() model, what changes?",
    "options": [
      "P keeps R1, becomes blocked, and joins R2’s waiting list",
      "P releases R1 automatically and keeps running",
      "P owns R2 immediately because it already owns R1",
      "P is blocked on both R1 and R2"
    ],
    "correct": 0,
    "explanation": "The unsuccessful request blocks P on R2 and does not automatically release held resources. Holding R1 does not mean P is waiting for R1."
  },
  {
    "id": "Q033",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.5 · scheduler",
    "prompt": "Higher numbers mean higher priority. Running P has priority 3; blocked Q has priority 7 and waits for a resource held by P. P releases it. Who runs after the scheduler?",
    "options": [
      "Q; P becomes ready",
      "P, because releasing a resource cannot cause preemption",
      "Neither, because the resource becomes free",
      "Q, while P becomes blocked on that same resource"
    ],
    "correct": 0,
    "explanation": "Q acquires the resource and becomes ready at priority 7. The priority scheduler preempts P; P is still runnable and becomes ready, not blocked."
  },
  {
    "id": "Q034",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.5 · multi-unit resource exercise",
    "prompt": "A resource has 5 free units. Its strict FIFO wait queue contains requests (A,4),(B,2),(C,1). Grant requests from the head until the next cannot fit; no skipping. What happens?",
    "options": [
      "A gets 4; 1 unit remains; B and C wait",
      "A and C get units because both fit together",
      "B and C get units first to maximize throughput",
      "All three get units because 5 units were initially free"
    ],
    "correct": 0,
    "explanation": "After granting A, only one unit remains. B needs two and blocks the FIFO queue, so C cannot bypass B. This trades some utilization for queue fairness."
  },
  {
    "id": "Q035",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.6 · TCB / PCB",
    "prompt": "Two threads in one process execute different functions. Which information must be private to each thread for independent execution?",
    "options": [
      "Program counter, register state, and execution stack",
      "Executable code, every global variable, and all open files",
      "Only the process identifier",
      "Only a separate copy of the entire address space"
    ],
    "correct": 0,
    "explanation": "Threads share process code, globals, and resources, but each needs its own control flow and call stack. A separate address space would defeat this sharing."
  },
  {
    "id": "Q036",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.6 · user-level threads",
    "prompt": "Eight user threads map to one kernel thread. One user thread makes a blocking kernel I/O call. Which consequence follows in this many-to-one model?",
    "options": [
      "All eight lose CPU execution through that kernel thread until it unblocks",
      "Seven continue on seven other CPUs automatically",
      "Only the calling user thread can be affected",
      "The library becomes a kernel scheduler"
    ],
    "correct": 0,
    "explanation": "The kernel sees one schedulable execution stream. Blocking it blocks all user threads mapped onto it, even if some are logically ready."
  },
  {
    "id": "Q037",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.6 · combined mapping",
    "prompt": "Six runnable user threads map to three kernel threads on a four-core machine. What is their maximum simultaneous execution count?",
    "options": [
      "3",
      "6",
      "4",
      "1"
    ],
    "correct": 0,
    "explanation": "Parallel execution is bounded by runnable user threads, usable kernel threads, and physical cores: min(6,3,4)=3."
  },
  {
    "id": "Q038",
    "topic": "Processes & threads",
    "source": "ZyBooks 2.6 · server exercise",
    "prompt": "A single-threaded server needs CPU 12 ms per request plus 60 ms disk wait on a cache miss. Requests arrive every 24 ms. Ignoring other costs, what minimum hit rate h keeps average service time ≤24 ms?",
    "options": [
      "80%",
      "60%",
      "75%",
      "90%"
    ],
    "correct": 0,
    "explanation": "12+60(1−h)≤24 gives 1−h≤0.2, so h≥0.8. This average-load test does not guarantee bounded latency for bursts; equality leaves no spare capacity."
  },
  {
    "id": "Q039",
    "topic": "Processes & threads",
    "source": "Module 2 goals · fork()",
    "prompt": "Assume every fork succeeds and every resulting process executes both calls. Starting from one process: fork(); fork(); How many processes reach the next statement, including the original?",
    "options": [
      "4",
      "2",
      "3",
      "8"
    ],
    "correct": 0,
    "explanation": "Each successful unconditional fork doubles the population that continues. Two doublings give 2²=4 processes, of which three are newly created."
  },
  {
    "id": "Q040",
    "topic": "Processes & threads",
    "source": "Provided Pointers C file · aliasing",
    "prompt": "Trace C integer arithmetic:\nint i1=5, i2; int *p1=&i1, *p2;\ni2=*p1/2+10; p2=p1; *p2+=3;\nWhat are (i1,i2,*p1)?",
    "options": [
      "(8,12,8)",
      "(5,12,8)",
      "(8,14,8)",
      "(8,12.5,8)"
    ],
    "correct": 0,
    "explanation": "5/2 is integer division, so i2 becomes 12. Both pointers alias i1. Updating through p2 makes i1 and *p1 equal 8 without recomputing i2."
  },
  {
    "id": "Q041",
    "topic": "Processes & threads",
    "source": "Provided Pointers C file · pointer reassignment",
    "prompt": "Trace:\nint a=4,b=9; int *p=&a,*q=p;\np=&b; *q=*p+1;\nWhat are (a,b,*p,*q)?",
    "options": [
      "(10,9,9,10)",
      "(4,10,10,4)",
      "(10,10,10,10)",
      "(4,9,9,4)"
    ],
    "correct": 0,
    "explanation": "Reassigning p does not reassign q. q still points to a; *p reads b=9, so assigning through q changes a to 10."
  },
  {
    "id": "Q042",
    "topic": "Processes & threads",
    "source": "Module 2 goals · pthread / shared state",
    "prompt": "A parent passes &i (the same loop variable) to several threads, which read it later. Which redesign gives each thread a stable intended argument?",
    "options": [
      "Store one value per thread in separate objects that remain alive until the threads finish",
      "Pass &i again immediately before incrementing it",
      "Make every thread share the same pointer and hope creation order fixes reads",
      "Destroy each argument object immediately after thread creation"
    ],
    "correct": 0,
    "explanation": "The pointer alone does not snapshot its pointee. Separate stable storage avoids reuse of the same variable; keeping it alive avoids dangling pointers. Join/wait for completion before reclaiming it."
  },
  {
    "id": "Q043",
    "topic": "Scheduling",
    "source": "ZyBooks 3.1 · scheduling levels",
    "prompt": "The OS admits a new job to RL, then picks one RL entry to execute. Which decisions are these, in order?",
    "options": [
      "Long-term admission; short-term dispatch",
      "Short-term admission; long-term dispatch",
      "Both necessarily long-term",
      "Both necessarily nonpreemptive"
    ],
    "correct": 0,
    "explanation": "Long-term scheduling controls admission to competition for the CPU. Short-term scheduling selects which runnable process executes next."
  },
  {
    "id": "Q044",
    "topic": "Scheduling",
    "source": "ZyBooks 3.1 · timing parameters",
    "prompt": "A process arrived at 2. At time 11 it has consumed 4 CPU units of a total requirement of 10. What are (real time in system, remaining CPU time)?",
    "options": [
      "(9,6)",
      "(4,6)",
      "(9,1)",
      "(11,10)"
    ],
    "correct": 0,
    "explanation": "Real time is 11−2=9 and includes waiting. Remaining CPU is 10−4=6; wall time in the system is not CPU service received."
  },
  {
    "id": "Q045",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · Challenge 3.2.1",
    "prompt": "One CPU, no overhead. A(arrival 0,burst 7), B(2,2), C(1,4). Under FCFS, what is the average turnaround?",
    "options": [
      "28/3 ≈ 9.33",
      "31/3 ≈ 10.33",
      "25/3 ≈ 8.33",
      "13"
    ],
    "correct": 0,
    "explanation": "Arrival order is A,C,B. Completions are A=7,C=11,B=13; turnaround values are 7,10,11. Average=(7+10+11)/3=28/3."
  },
  {
    "id": "Q046",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · SJF",
    "prompt": "One CPU, no overhead. A(0,8), B(1,4), C(2,2), where pairs are (arrival,burst). Nonpreemptive SJF: which completion order and times are correct?",
    "options": [
      "A at 8, C at 10, B at 14",
      "C at 4, B at 8, A at 14",
      "A at 8, B at 12, C at 14",
      "C at 2, B at 6, A at 14"
    ],
    "correct": 0,
    "explanation": "At 0 only A is available, so it runs to completion. SJF cannot preempt A when shorter jobs arrive. At 8 it chooses C before B."
  },
  {
    "id": "Q047",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · SRT",
    "prompt": "A(0,8), B(1,4), C(2,2), pairs (arrival,burst), no overhead. Under SRT, what are completion times (A,B,C)?",
    "options": [
      "(14,7,4)",
      "(8,14,10)",
      "(14,6,8)",
      "(14,5,7)"
    ],
    "correct": 0,
    "explanation": "Trace: A 0–1; B 1–2; C 2–4; B 4–7; A 7–14. Recompute remaining service at each arrival; C preempts B because 2<3."
  },
  {
    "id": "Q048",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · SRT tie rule",
    "prompt": "A(0,6), B(2,4), C(3,1). Use SRT; on equal remaining time keep the current process. No overhead. Which trace is correct?",
    "options": [
      "A 0–3, C 3–4, A 4–7, B 7–11",
      "A 0–2, B 2–3, C 3–4, B 4–7, A 7–11",
      "A 0–6, C 6–7, B 7–11",
      "A 0–3, C 3–4, B 4–8, A 8–11"
    ],
    "correct": 0,
    "explanation": "At 2, A has 4 remaining, tying B, so A stays. At 3, C preempts with 1<3. At 4, A’s 3 remaining beats B’s 4."
  },
  {
    "id": "Q049",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · waiting and turnaround",
    "prompt": "A CPU-only job arrives at 5, first executes at 9, and completes at 23 after consuming 8 CPU units. What are turnaround, total ready waiting, and first-dispatch delay?",
    "options": [
      "(18,10,4)",
      "(23,15,9)",
      "(18,14,4)",
      "(14,6,4)"
    ],
    "correct": 0,
    "explanation": "Turnaround=23−5=18. With no I/O, waiting=18−8=10, including waits after preemption. First-dispatch delay=9−5=4."
  },
  {
    "id": "Q050",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · scheduling available jobs",
    "prompt": "Under work-conserving nonpreemptive SJF, A(0,5) and B(10,1) are the only jobs. What is the average turnaround?",
    "options": [
      "3",
      "8",
      "5.5",
      "6"
    ],
    "correct": 0,
    "explanation": "A runs 0–5; the CPU idles 5–10; B runs 10–11. Turnaround values are 5 and 1, averaging 3. Do not count time before arrival as waiting."
  },
  {
    "id": "Q051",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · starvation",
    "prompt": "A long job is ready, but shorter jobs keep arriving before every SJF selection. What can happen, and why?",
    "options": [
      "The long job can starve because each selection favors a shorter ready job",
      "Deadlock is inevitable because all jobs hold resources",
      "SJF must eventually choose the long job after one short job",
      "The long job’s total CPU requirement decreases while it waits"
    ],
    "correct": 0,
    "explanation": "SJF has no inherent bound on waiting under an unending supply of shorter jobs. This is starvation, not necessarily a circular resource deadlock."
  },
  {
    "id": "Q052",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · exponential averaging",
    "prompt": "Use τnext=αt+(1−α)τ with α=0.25. Starting estimate 8, measured bursts 12 then 4. What is the estimate after both updates?",
    "options": [
      "7.75",
      "8",
      "6",
      "9"
    ],
    "correct": 0,
    "explanation": "First estimate=.25×12+.75×8=9. Second=.25×4+.75×9=7.75. Use the updated estimate, not the original 8, on the second step."
  },
  {
    "id": "Q053",
    "topic": "Scheduling",
    "source": "ZyBooks 3.2 · exponential averaging",
    "prompt": "For τnext=αt+(1−α)τ, which α makes the estimate respond most strongly to a sudden new burst, and what is the tradeoff?",
    "options": [
      "α=1; it uses only the latest sample and discards smoothing",
      "α=0; it uses only the latest sample",
      "α=0.5; it always predicts exactly",
      "α=1; it averages all past bursts equally"
    ],
    "correct": 0,
    "explanation": "The new sample’s weight is α. At 1 the prior estimate has zero weight; at 0 the estimate never changes."
  },
  {
    "id": "Q054",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · Challenge 3.3.1",
    "prompt": "RR: A,B,C arrive at 0 in that order, with bursts 5,3,1. Q=2, overhead=0. What are completion times (A,B,C)?",
    "options": [
      "(9,8,5)",
      "(5,8,9)",
      "(9,7,5)",
      "(8,9,5)"
    ],
    "correct": 0,
    "explanation": "Trace: A 0–2, B 2–4, C 4–5, A 5–7, B 7–8, A 8–9. A finished process leaves the queue."
  },
  {
    "id": "Q055",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · RR arrivals",
    "prompt": "RR Q=2, no overhead. A arrives at 0 with burst 5; B arrives at 1 with burst 2. What is B’s turnaround?",
    "options": [
      "3",
      "2",
      "4",
      "6"
    ],
    "correct": 0,
    "explanation": "A runs 0–2. B enters the queue at 1 and runs 2–4. Its turnaround is completion 4 minus arrival 1 = 3."
  },
  {
    "id": "Q056",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · context-switch cost",
    "prompt": "Three processes each need CPU 8 ms; RR Q=2 ms. Charge S=0.5 ms after every slice, including the final return to the OS; no initial charge. Total elapsed time?",
    "options": [
      "30 ms",
      "24 ms",
      "29.5 ms",
      "36 ms"
    ],
    "correct": 0,
    "explanation": "Each process requires 4 slices, giving 12 slices and 12 charges. Useful work=24; overhead=12×0.5=6; elapsed=30 ms."
  },
  {
    "id": "Q057",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · useful CPU fraction",
    "prompt": "For continuously runnable jobs with full RR quanta Q=9 ms and one switch S=1 ms per quantum, what fraction is overhead?",
    "options": [
      "10%",
      "11.11%",
      "90%",
      "1%"
    ],
    "correct": 0,
    "explanation": "A cycle lasts Q+S=10 ms, with 1 ms overhead. S/Q=11.11% is overhead relative to useful work, not its fraction of elapsed time."
  },
  {
    "id": "Q058",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · instruction throughput",
    "prompt": "A CPU performs 120 million useful instructions/s when uninterrupted. Four saturated processes share RR with Q=4 ms, S=1 ms per slice. Approximate useful rate per process?",
    "options": [
      "24 million/s",
      "30 million/s",
      "96 million/s",
      "6 million/s"
    ],
    "correct": 0,
    "explanation": "Useful fraction is 4/(4+1)=0.8, so total useful rate is 96 million/s. Divide equally among four processes: 24 million/s each."
  },
  {
    "id": "Q059",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · quantum constraint exercise",
    "prompt": "Four continuously runnable processes use RR. S=1 ms at each switch. The gap from the end of P’s slice to the start of P’s next slice must be ≤19 ms. What is the largest Q?",
    "options": [
      "5 ms",
      "6 ms",
      "4.75 ms",
      "19 ms"
    ],
    "correct": 0,
    "explanation": "The gap contains 3 other slices and 4 switches: 3Q+4S≤19. Therefore 3Q≤15 and Q≤5 ms."
  },
  {
    "id": "Q060",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · quantum tradeoff",
    "prompt": "All RR bursts are shorter than a very large quantum. What behavior does RR approach?",
    "options": [
      "FCFS, because each selected job completes before its slice expires",
      "SRT, because short jobs always preempt",
      "EDF, because completion times become deadlines",
      "Equal instantaneous CPU sharing"
    ],
    "correct": 0,
    "explanation": "Without quantum expiration before completion, jobs leave in queue order. Increasing Q reduces switching but can worsen initial response for jobs behind long bursts."
  },
  {
    "id": "Q061",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · multilevel scheduling",
    "prompt": "Larger priority numbers win. Level 5 contains A then B; level 3 contains C. RR applies only within a level. If A and B remain runnable forever, what can happen to C?",
    "options": [
      "C can starve despite RR fairness within level 5",
      "C necessarily runs every third quantum",
      "C preempts B because it has waited one quantum",
      "All levels automatically receive equal CPU time"
    ],
    "correct": 0,
    "explanation": "RR within a priority level does not guarantee service between levels. Persistent higher-priority work can keep a lower queue from running."
  },
  {
    "id": "Q062",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · MLF",
    "prompt": "MLF has top level 5 and Q=1 there, doubling at each lower level. A job starts at level 5 and needs 12 CPU units. No competitors or I/O; demote after each exhausted allotment. Where does it finish?",
    "options": [
      "Level 2, after using 5 units there",
      "Level 1, after using 1 unit there",
      "Level 3, after using 4 units there",
      "Level 2, after using 8 units there"
    ],
    "correct": 0,
    "explanation": "Levels 5,4,3 consume 1+2+4=7 units. The remaining 5 fit in level 2’s 8-unit allotment."
  },
  {
    "id": "Q063",
    "topic": "Scheduling",
    "source": "ZyBooks 3.3 · MLF trace",
    "prompt": "MLF top level 3 has Q=1; level 2 has Q=2; level 1 has Q=4. A then B both arrive at 0 with bursts 4 and 2. FIFO within each level; no overhead. What are completion times (A,B)?",
    "options": [
      "(6,5)",
      "(4,6)",
      "(5,6)",
      "(6,3)"
    ],
    "correct": 0,
    "explanation": "A 0–1 then B 1–2 both demote. A uses 2–4 and demotes again; B completes 4–5; A finishes 5–6."
  },
  {
    "id": "Q064",
    "topic": "Scheduling",
    "source": "ZyBooks 3.5 · Challenge 3.5.1",
    "prompt": "Floating priorities use base+event boost. P’s base is 5 and current priority has fallen to 2. Keyboard boost=6; disk boost=1. On returning from disk, what priority does P get?",
    "options": [
      "6",
      "3",
      "8",
      "12"
    ],
    "correct": 0,
    "explanation": "The boost is added to base priority, not the demoted current priority: 5+1=6."
  },
  {
    "id": "Q065",
    "topic": "Scheduling",
    "source": "ZyBooks 3.5 · two-tier model",
    "prompt": "Real-time work occupies a higher tier; batch/interactive work uses MLF below it. A low-tier job has the shortest remaining burst of all jobs. When can it run?",
    "options": [
      "When no higher-tier job is runnable",
      "Immediately, because SRT overrides the tiers",
      "Only after it is relabeled a real-time job",
      "Never, even when the higher tier is empty"
    ],
    "correct": 0,
    "explanation": "Tier selection takes priority over a lower-tier job’s burst length. Blocked high-tier jobs are not runnable and do not by themselves prevent lower-tier service."
  },
  {
    "id": "Q066",
    "topic": "Scheduling",
    "source": "ZyBooks 3.4 · Challenge 3.4.1",
    "prompt": "Independent preemptible periodic tasks on one CPU have (C,T)=(2,5),(1,4),(3,10), deadlines equal periods, no overhead or blocking. Is ideal EDF feasible?",
    "options": [
      "Yes; U=0.95",
      "No; U=1.05",
      "No; any U>0.7 is impossible",
      "Yes; U=0.65"
    ],
    "correct": 0,
    "explanation": "U=2/5+1/4+3/10=.4+.25+.3=.95≤1. Under the stated ideal implicit-deadline assumptions, EDF can meet all deadlines."
  },
  {
    "id": "Q067",
    "topic": "Scheduling",
    "source": "ZyBooks 3.4 · capacity",
    "prompt": "Existing ideal EDF tasks use U=0.70. Each additional independent periodic task needs C=3 every T=20, with deadline T. How many can be added at most?",
    "options": [
      "2",
      "1",
      "3",
      "6"
    ],
    "correct": 0,
    "explanation": "Each adds .15 utilization. (1−.70)/.15=2, reaching U=1. This assumes no overhead or blocking; three would require U=1.15."
  },
  {
    "id": "Q068",
    "topic": "Scheduling",
    "source": "ZyBooks 3.4 · RM versus EDF",
    "prompt": "Tasks A(C=3,T=8) and B(C=6,T=10) release at 0, with deadlines equal periods and zero overhead. Under RM, why does B miss its first deadline?",
    "options": [
      "A’s second release preempts B at 8, leaving B unfinished at 10",
      "U exceeds 1, making every scheduler fail",
      "B has higher RM priority and starves A",
      "RM gives priority to the later deadline"
    ],
    "correct": 0,
    "explanation": "A runs 0–3, B 3–8 (5 of 6 units), then A preempts 8–11. B misses deadline 10. U=.375+.6=.975; ideal EDF remains feasible."
  },
  {
    "id": "Q069",
    "topic": "Scheduling",
    "source": "ZyBooks 3.4 · EDF trace",
    "prompt": "At t=8, B has 1 CPU unit remaining with deadline 10; newly released A needs 3 units with deadline 16. Under EDF, what happens?",
    "options": [
      "B runs 8–9, then A can run 9–12",
      "A runs first because its period is shorter",
      "B must wait until 16",
      "A and B each run half-speed on the single CPU"
    ],
    "correct": 0,
    "explanation": "EDF compares current absolute deadlines: 10 precedes 16. This differs from RM’s fixed period-based priority."
  },
  {
    "id": "Q070",
    "topic": "Scheduling",
    "source": "ZyBooks 3.4 · interpreting utilization",
    "prompt": "A periodic task set has U=0.90 under the ideal implicit-deadline assumptions. What can be concluded without an RM trace?",
    "options": [
      "EDF is feasible; U alone does not settle RM feasibility here",
      "Both RM and EDF are impossible because U>0.7",
      "RM is guaranteed because U<1",
      "No algorithm can schedule tasks above U=0.9"
    ],
    "correct": 0,
    "explanation": "The course’s approximately 0.7 discussion is not an impossibility threshold. RM can succeed above it, but U≤1 alone is not an RM guarantee."
  },
  {
    "id": "Q071",
    "topic": "Scheduling",
    "source": "Module 3 goals · Amdahl’s law",
    "prompt": "A workload is 25% serial and 75% perfectly parallel. Ignore overhead. What speedup is possible on four processors?",
    "options": [
      "16/7 ≈ 2.286",
      "4",
      "3",
      "7/4 = 1.75"
    ],
    "correct": 0,
    "explanation": "Speedup=1/(s+(1−s)/N)=1/(.25+.75/4)=1/.4375=16/7. Only the parallel fraction is divided by N."
  },
  {
    "id": "Q072",
    "topic": "Scheduling",
    "source": "Module 3 goals · Amdahl’s law",
    "prompt": "To achieve an ideal speedup of at least 4 on eight processors, what is the largest allowable serial fraction s?",
    "options": [
      "1/7 ≈ 14.29%",
      "25%",
      "12.5%",
      "50%"
    ],
    "correct": 0,
    "explanation": "1/(s+(1−s)/8)≥4 requires (7s+1)/8≤1/4. Thus 7s≤1, or s≤1/7."
  },
  {
    "id": "Q073",
    "topic": "Concurrency",
    "source": "ZyBooks 4.1 · lost updates",
    "prompt": "Initially x=10. P executes load Rp,x; add Rp,3; store Rp,x. Q similarly adds 7. Both load before either stores; Q stores last. What is x?",
    "options": [
      "17",
      "20",
      "13",
      "10"
    ],
    "correct": 0,
    "explanation": "Both read 10. P computes 13 and Q computes 17. Q’s last store overwrites P’s update. Treat this as the explicit machine-level model, not unsynchronized C semantics."
  },
  {
    "id": "Q074",
    "topic": "Concurrency",
    "source": "ZyBooks 4.1 · interleaving exercise",
    "prompt": "P has three ordered atomic steps; Q has two ordered atomic steps. No synchronization. How many instruction interleavings preserve each process’s internal order?",
    "options": [
      "10",
      "6",
      "12",
      "120"
    ],
    "correct": 0,
    "explanation": "Choose the three positions of P among five total: 5!/(3!2!)=10. Counting all 5! permutations would incorrectly reorder instructions within each process."
  },
  {
    "id": "Q075",
    "topic": "Concurrency",
    "source": "ZyBooks 4.1 · critical-section requirements",
    "prompt": "A strict alternation lock makes P wait for Q’s turn even though Q is not attempting to enter. Which course requirement is violated?",
    "options": [
      "Prevention of lockout by a nonparticipating process",
      "Mutual exclusion necessarily",
      "The requirement that all processes run in parallel",
      "The rule that no shared variable may exist"
    ],
    "correct": 0,
    "explanation": "Strict alternation can preserve exclusion while an uninterested process prevents progress. The course calls this lockout; a correct CS solution must allow entry when the other process is not competing."
  },
  {
    "id": "Q076",
    "topic": "Concurrency",
    "source": "ZyBooks 4.1 · software solution",
    "prompt": "P sets wantP=1 then waits while wantQ. Q sets wantQ=1 then waits while wantP. Both set their flags before either tests. What is the failure?",
    "options": [
      "Deadlock: both spin forever unless something else changes the flags",
      "Both immediately enter the critical section",
      "Only temporary preemption, never deadlock",
      "The flags guarantee bounded waiting"
    ],
    "correct": 0,
    "explanation": "Each flag can be cleared only after that process enters and exits CS. Both wait on the other, so neither reaches its clear operation."
  },
  {
    "id": "Q077",
    "topic": "Concurrency",
    "source": "ZyBooks 4.1 · will_wait solution",
    "prompt": "Assume atomic sequentially consistent reads/writes. P sets c1=1; will_wait=1. Q then sets c2=1; will_wait=2. P waits while c2 && will_wait==1; Q waits while c1 && will_wait==2. Who may enter?",
    "options": [
      "P enters; Q waits",
      "Q enters; P waits",
      "Both enter",
      "Both wait"
    ],
    "correct": 0,
    "explanation": "The last write makes will_wait=2. P’s conjunction is false and Q’s is true. The tie variable prevents both from waiting or entering in this snapshot."
  },
  {
    "id": "Q078",
    "topic": "Concurrency",
    "source": "ZyBooks 4.1–4.2 · cooperation",
    "prompt": "A producer and consumer guard a one-slot buffer only with mutex=1. Which additional synchronization is needed?",
    "options": [
      "Empty/full availability conditions to prevent overwrite and premature reads",
      "A second mutex with no availability state",
      "A larger time quantum",
      "No change; mutual exclusion implies the data is ready"
    ],
    "correct": 0,
    "explanation": "A mutex prevents simultaneous access but does not encode whether the buffer contains an unconsumed item. Cooperation needs ordering/availability as well as exclusion."
  },
  {
    "id": "Q079",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · semaphore ordering",
    "prompt": "A must complete before B, and B before C. Each statement runs in a separate process. Which semaphore scheme enforces this, with x=y=0?",
    "options": [
      "A;V(x) / P(x);B;V(y) / P(y);C",
      "P(x);A / B;V(x) / C;V(y)",
      "A;P(x) / V(x);B;P(y) / V(y);C",
      "A;V(x) / B;V(y) / C;P(x)"
    ],
    "correct": 0,
    "explanation": "A produces the permit that allows B; B produces the permit that allows C. Zero initialization prevents either dependent statement from running prematurely."
  },
  {
    "id": "Q080",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · permits",
    "prompt": "Semaphore s starts at 2. Three distinct processes each perform P(s) once; none performs V yet. Under the abstract nonnegative model, what is the state?",
    "options": [
      "Two have passed; one waits; s=0",
      "All three pass; s=−1",
      "One passes; two wait; s=1",
      "Two wait; one passes; s=0"
    ],
    "correct": 0,
    "explanation": "Each successful P consumes one permit. Two initial permits allow two completions. The third waits; negative counts belong to a different internal representation."
  },
  {
    "id": "Q081",
    "topic": "Concurrency",
    "source": "ZyBooks 4.3 · signed semaphore implementation",
    "prompt": "Use the signed-count implementation: P decrements and blocks if negative; V increments and wakes one if result ≤0. Initially s=1. Three processes call P, then an external process calls V once. Final s and still-waiting count?",
    "options": [
      "s=−1; one still waiting",
      "s=0; no one waiting",
      "s=−2; two still waiting",
      "s=1; one still waiting"
    ],
    "correct": 0,
    "explanation": "Three P operations take s from 1 to −2 and queue two waiters. V raises it to −1 and wakes one. The resumed P does not decrement again."
  },
  {
    "id": "Q082",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · mutual exclusion",
    "prompt": "A counting semaphore guarding CS is accidentally initialized to 2. What property can fail immediately?",
    "options": [
      "Mutual exclusion: two processes can pass P before any V",
      "All progress is impossible",
      "Every V must block",
      "The semaphore automatically resets itself to 1"
    ],
    "correct": 0,
    "explanation": "Initialization defines the number of simultaneous permits. A mutex-style semaphore needs one permit, with balanced acquire/release."
  },
  {
    "id": "Q083",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · circular buffer",
    "prompt": "A size-8 ring uses every slot and tracks occupancy separately. next_in=next_out=3. What can indices alone tell you?",
    "options": [
      "The buffer may be empty or full; occupancy information is needed",
      "The buffer is definitely empty",
      "Exactly three slots are full",
      "The buffer is definitely full"
    ],
    "correct": 0,
    "explanation": "After zero net items, indices match; after filling all eight slots they also match. Equal indices are ambiguous in a ring that allows all slots to be used."
  },
  {
    "id": "Q084",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · Challenge 4.2.1",
    "prompt": "Size-8 ring, next_in=2 and next_out=6. Indices advance modulo 8; no operation is in flight. How many items can be consumed before blocking, and how many new items can be produced without consumption?",
    "options": [
      "4 and 4",
      "2 and 6",
      "6 and 2",
      "0 and 8"
    ],
    "correct": 0,
    "explanation": "Occupied slots are 6,7,0,1: (2−6+8) mod 8=4. Four of eight slots are empty. Distinct indices avoid the empty/full ambiguity."
  },
  {
    "id": "Q085",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · bounded-buffer semaphore code",
    "prompt": "For multiple producers/consumers, empty=N, full=0, mutex=1. Which producer sequence is correct?",
    "options": [
      "P(empty); P(mutex); insert; V(mutex); V(full)",
      "P(mutex); P(empty); insert; V(full); V(mutex)",
      "P(full); P(mutex); insert; V(mutex); V(empty)",
      "V(full); P(empty); insert; P(mutex); V(mutex)"
    ],
    "correct": 0,
    "explanation": "Reserve an empty slot before acquiring the buffer mutex; modify shared state under mutex; publish a full slot only after insertion. Waiting on empty while holding mutex can block consumers that would create space."
  },
  {
    "id": "Q086",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · bounded-buffer deadlock",
    "prompt": "Buffer is full. Producer executes P(mutex) then blocks on P(empty), still holding mutex. Consumer needs mutex to remove an item. What happens?",
    "options": [
      "Deadlock: producer waits for space that the locked-out consumer must create",
      "Consumer removes an item safely without mutex",
      "Producer’s P automatically releases every other semaphore",
      "No issue because full and empty are counting semaphores"
    ],
    "correct": 0,
    "explanation": "Ordinary semaphore waiting does not release unrelated locks. Reserve availability first, then enter the critical section."
  },
  {
    "id": "Q087",
    "topic": "Concurrency",
    "source": "ZyBooks 4.2 · reservation accounting",
    "prompt": "A size-5 buffer is empty (empty=5,full=0). A producer completes P(empty) but pauses before inserting or V(full). What is empty+full, and is that an error?",
    "options": [
      "4; no, one slot is reserved by an in-flight operation",
      "5; semaphore totals can never change",
      "6; P creates a temporary permit",
      "4; this necessarily proves a lost update"
    ],
    "correct": 0,
    "explanation": "Permit counters describe available unreserved slots/items. During operations, reservations can make empty+full<N. At quiescent boundaries with completed operations, the sum is N."
  },
  {
    "id": "Q088",
    "topic": "Concurrency",
    "source": "ZyBooks 4.3 · atomic test-and-set",
    "prompt": "Define TAS(lock) atomically as: old=lock; lock=1; return old. lock=0 initially. Which acquire/release pair is correct?",
    "options": [
      "while(TAS(lock)==1) spin; / lock=0;",
      "while(TAS(lock)==0) spin; / lock=1;",
      "if(lock==0) lock=1; / lock=0;",
      "lock=0; / while(TAS(lock)==1) spin;"
    ],
    "correct": 0,
    "explanation": "An old value of 0 means this caller atomically acquired the lock. Separate test and write allow both contenders to observe 0. Real implementations also require appropriate memory ordering."
  },
  {
    "id": "Q089",
    "topic": "Concurrency",
    "source": "ZyBooks 4.3 · busy waiting",
    "prompt": "A thread on a single CPU spins for a long time waiting for another thread to release a lock. Why is blocking often preferable for this wait?",
    "options": [
      "It frees CPU time for runnable work, potentially including the lock owner",
      "It removes the need for atomic acquire operations",
      "It guarantees zero scheduling overhead",
      "It converts all shared data into private data"
    ],
    "correct": 0,
    "explanation": "Spinning consumes CPU without useful progress. Blocking has overhead but avoids burning a long waiting interval; short low-level critical sections can still justify spinning."
  },
  {
    "id": "Q090",
    "topic": "Concurrency",
    "source": "ZyBooks 4.3 · lost-wakeup implementation note",
    "prompt": "A semaphore implementation releases its internal lock and only later enqueues/sleeps the waiter. A V occurs in between and sees no waiter. What must the implementation prevent?",
    "options": [
      "A lost wakeup through an atomic or coordinated enqueue/block handoff",
      "Every context switch in the system",
      "All positive semaphore values",
      "All execution of V by other processes"
    ],
    "correct": 0,
    "explanation": "A wakeup delivered before a process is registered/asleep can be lost. Correct implementations coordinate wait-queue insertion, lock release, and blocking so the signal cannot disappear in the gap."
  },
  {
    "id": "Q091",
    "topic": "Concurrency",
    "source": "Module 4 goals · priority inversion",
    "prompt": "Low-priority L holds a mutex. High-priority H blocks on it; medium-priority M keeps preempting L. Which mechanism directly addresses the inversion?",
    "options": [
      "Temporarily raise L to H’s priority while L holds the needed lock",
      "Raise M above H permanently",
      "Lower H below every other process",
      "Let H enter the protected region without acquiring the lock"
    ],
    "correct": 0,
    "explanation": "Priority inheritance lets the lock owner run despite medium-priority interference, finish the protected work, and release H. It does not remove the need for the lock."
  },
  {
    "id": "Q092",
    "topic": "Concurrency",
    "source": "ZyBooks 4.4 · condition variable vs semaphore",
    "prompt": "No process waits on condition c. A process calls c.signal; later another calls c.wait. In the course monitor model, what happens?",
    "options": [
      "The signal has no stored credit; the later wait blocks",
      "The later wait consumes one saved signal and continues",
      "signal increments c to 1",
      "wait polls without releasing the monitor"
    ],
    "correct": 0,
    "explanation": "Condition variables are waiting queues, not stored permits. A signal with no waiter has no effect; semaphore V, in contrast, can accumulate a permit."
  },
  {
    "id": "Q093",
    "topic": "Concurrency",
    "source": "ZyBooks 4.4 · monitor wait",
    "prompt": "A monitor function finds its required predicate false and calls c.wait. What must happen to monitor ownership?",
    "options": [
      "Release ownership while blocking so another process can make the predicate true",
      "Keep ownership until a different process enters the same monitor",
      "Delete all monitor state",
      "Return normally without blocking"
    ],
    "correct": 0,
    "explanation": "Waiting while retaining exclusive monitor ownership would prevent other monitor calls from changing the condition. Wait leaves the monitor and queues the caller."
  },
  {
    "id": "Q094",
    "topic": "Concurrency",
    "source": "ZyBooks 4.4 · Hoare-style signal",
    "prompt": "Use the provided Hoare-style monitor with an urgent queue. P signals c while Q waits on c; P has more code to execute. Who proceeds immediately?",
    "options": [
      "Q runs inside the monitor; P waits on the urgent queue",
      "P and Q both run inside the monitor",
      "P finishes before Q can run",
      "A new outside entrant necessarily runs first"
    ],
    "correct": 0,
    "explanation": "The course signal transfers monitor execution immediately to the waiting process. The signaler waits urgently until it can resume; this preserves mutual exclusion."
  },
  {
    "id": "Q095",
    "topic": "Concurrency",
    "source": "ZyBooks 4.4 · Challenge 4.4.1",
    "prompt": "Hoare-style bounded buffer, capacity 1, initially empty. Distinct callers issue deposit A (finishes), deposit B (blocks), then remove C. After all enabled continuations finish, what are (full_slots,notfull waiters,notempty waiters)?",
    "options": [
      "(1,0,0)",
      "(0,1,0)",
      "(1,1,0)",
      "(0,0,1)"
    ],
    "correct": 0,
    "explanation": "A fills the buffer, B waits. C removes A’s item and signals notfull; B immediately deposits its item. Both enabled calls finish with one full slot and no waiters."
  },
  {
    "id": "Q096",
    "topic": "Concurrency",
    "source": "ZyBooks 4.4 · Mesa exercise / Module 4 Java goals",
    "prompt": "Under Mesa/Java-style notification, a signaled waiter must reacquire the lock. What is the safe predicate-check pattern?",
    "options": [
      "while (!predicate) wait(); then act under the lock",
      "if (!predicate) wait(); then assume it remains true",
      "wait(); then act without the lock",
      "notify(); then skip checking the predicate"
    ],
    "correct": 0,
    "explanation": "A signal does not reserve the condition for the waiter; another thread may change it before reacquisition. Recheck in a loop, which also handles spurious wakeups."
  },
  {
    "id": "Q097",
    "topic": "Concurrency",
    "source": "ZyBooks 4.4 · monitor implementation",
    "prompt": "A Hoare monitor has four condition variables and five functions. Using the course implementation, how many semaphores are needed?",
    "options": [
      "6: one mutex, one urgent, four condition semaphores",
      "10: one mutex per function plus five others",
      "4: one per condition only",
      "2: mutex and urgent only"
    ],
    "correct": 0,
    "explanation": "The functions share a single monitor mutex and urgent queue. Each condition gets its own semaphore. Condition and urgent counters are additional integers, not additional semaphores."
  },
  {
    "id": "Q098",
    "topic": "Concurrency",
    "source": "ZyBooks 4.4 · priority waits",
    "prompt": "At now=10, A calls wakeme(5), B calls wakeme(2), C calls wakeme(2). Priority waits sort by alarm time, ties FIFO; awakened callers signal the next waiter. When and in what order do they leave?",
    "options": [
      "B then C at 12; A at 15",
      "A at 15, B at 16, C at 17",
      "B at 12, C at 13, A at 15",
      "All three at 15"
    ],
    "correct": 0,
    "explanation": "Alarm times are A=15, B=C=12. Sorted waits put B and C first; chained signaling lets equal-time alarms complete on the same tick."
  },
  {
    "id": "Q099",
    "topic": "Concurrency",
    "source": "ZyBooks 4.5 · Challenge 4.5.1",
    "prompt": "Use the course readers-writers policy. R1 is reading; W1 arrives and waits; then R2 arrives. What must R2 do?",
    "options": [
      "Wait so W1 can enter after the active readers finish",
      "Join R1 because all reads are compatible",
      "Enter together with W1",
      "Force R1 to stop midway through reading"
    ],
    "correct": 0,
    "explanation": "The queued writer closes admission to new readers. Otherwise an endless stream of readers could starve the writer."
  },
  {
    "id": "Q100",
    "topic": "Concurrency",
    "source": "ZyBooks 4.5 · readers-writers batching",
    "prompt": "Use the course policy. While W1 writes, arrivals are R1,W2,R2,W3. When W1 exits, who gets the next access phase?",
    "options": [
      "R1 and R2 together, before W2",
      "W2, then R1, then W3, then R2",
      "Only R1; R2 must wait for W3",
      "W2 and W3 together"
    ],
    "correct": 0,
    "explanation": "All readers accumulated while a writer is active are admitted as a batch before the next writer. Writers remain mutually exclusive. This question uses the specific course fairness policy."
  },
  {
    "id": "Q101",
    "topic": "Concurrency",
    "source": "ZyBooks 4.5 · dining-philosophers monitor",
    "prompt": "Five philosophers are in a ring. P0 and P2 are eating; P1,P3,P4 are hungry. P0 puts down and tests neighbors P4 then P1. Who can newly eat?",
    "options": [
      "P4 only",
      "P1 only",
      "P1 and P4",
      "Neither"
    ],
    "correct": 0,
    "explanation": "P4’s neighbors P3 and P0 are not eating, so it can enter. P1 still has eating neighbor P2 and must wait. P4 is not adjacent to P2."
  },
  {
    "id": "Q102",
    "topic": "Concurrency",
    "source": "ZyBooks 4.5 · dining-philosophers ordering",
    "prompt": "Every philosopher acquires its lower-numbered fork before its higher-numbered fork. What does this establish?",
    "options": [
      "It breaks circular wait, but does not by itself prove starvation freedom or maximum concurrency",
      "It guarantees every hungry philosopher eats immediately",
      "It allows adjacent philosophers to eat simultaneously",
      "It creates a cycle because fork numbers wrap around"
    ],
    "correct": 0,
    "explanation": "All acquisitions follow a global order, preventing a wait cycle. The course shows that ordered acquisition can still unnecessarily restrict concurrency; fairness is a separate concern."
  },
  {
    "id": "Q103",
    "topic": "Concurrency",
    "source": "ZyBooks 4.5 · elevator algorithm",
    "prompt": "Head starts at track 40 moving upward. All requests are already queued: 10,25,45,70,90. Use the course elevator rule: reverse at the last requested track, not the disk edge. What are service order and total travel?",
    "options": [
      "45,70,90,25,10; 130 tracks",
      "45,70,90,25,10; 90 tracks",
      "25,10,45,70,90; 110 tracks",
      "45,25,10,70,90; 150 tracks"
    ],
    "correct": 0,
    "explanation": "Sweep upward from 40 to 90 (50 tracks), then downward to 10 (80): total 130. This is the course’s request-bounded sweep, often called LOOK."
  },
  {
    "id": "Q104",
    "topic": "Concurrency",
    "source": "Module 4 goals · threads and synchronization",
    "prompt": "Two Java threads modify the same static counter inside synchronized instance methods, but each calls a different object. Does that alone protect the shared counter?",
    "options": [
      "No; the methods lock different instances, so both can enter concurrently",
      "Yes; synchronized always locks the entire JVM",
      "Yes; static data is automatically atomic",
      "No; synchronized never provides mutual exclusion"
    ],
    "correct": 0,
    "explanation": "Instance synchronization locks the receiver object. Protect a shared static counter with one shared lock (or an appropriate class-level synchronized operation), consistently used by both threads."
  }
];
